#!/bin/sh

set -e

echo "--- Executing APP entrypoint ---"
echo "--- Serving APP with serve ---"
serve -s dist -l 5173