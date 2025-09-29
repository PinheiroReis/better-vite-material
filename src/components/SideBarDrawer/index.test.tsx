import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideBarDrawer from './index';

describe('SideBarDrawer Component', () => {
  it('should render navigation links when open', () => {
    render(
      <MemoryRouter>
        <SideBarDrawer open={true} onClose={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
  });

  it('should not render content when closed', () => {
    render(
      <MemoryRouter>
        <SideBarDrawer open={false} onClose={() => {}} />
      </MemoryRouter>
    );

    expect(screen.queryByRole('link', { name: /home/i })).toBeNull();
  });
});
