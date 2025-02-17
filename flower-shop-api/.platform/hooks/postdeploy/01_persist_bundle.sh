#!/bin/bash

# Ensure the persistent directory exists
mkdir -p /var/app/support/vendor-bundle
chown -R webapp:webapp /var/app/support/vendor-bundle

# Symlink vendor/bundle to the persistent directory
ln -sfn /var/app/support/vendor-bundle /var/app/current/vendor/bundle

echo "Using persisted vendor/bundle to speed up Bundler install"
