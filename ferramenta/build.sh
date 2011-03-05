#!/bin/sh
# you will need to read the top level README, and run boostrap.py
# and buildout in order to make pyjsbuild

options="$@"
#../../pyjamas/bin/pyjsbuild --library_dir=/componentes --include-js=processing.js --output=../output $options PaginaPrincipal

../../pyjamas/bin/pyjsbuild --no-descriptors -m --output=../output $options PaginaPrincipal

