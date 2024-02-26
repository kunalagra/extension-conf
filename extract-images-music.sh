#!/bin/bash

# Define the source directory
src_dir="Music"

# Define the destination directory
dest_dir="Output"

# Create the destination directory if it doesn't exist
mkdir -p "$dest_dir"

# Find all artist.jpg files recursively inside the source directory
find "$src_dir" -type f -name "artist.jpg" | while read file; do
    # Extract the directory name containing the artist.jpg file
    dir_name=$(dirname "$file")
    
    # Extract the artist/album name from the directory name
    artist_name=$(basename "$dir_name")
    
    # Copy the artist.jpg file to the destination directory and rename it
    cp "$file" "$dest_dir/$artist_name.jpg"
done

echo "Copying complete."
