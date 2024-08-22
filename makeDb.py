import os
import pickledb

# Path to your database file
db_path = 'db.txt'

# Check if the database file exists and is not empty
if not os.path.exists(db_path) or os.stat(db_path).st_size == 0:
    # Initialize a new empty database
    db = pickledb.load(db_path, auto_dump=True)
    # Example: setting a default value to ensure there is something in the database
    db.set('init', 'This is a new database')
    db.dump()
else:
    # Load the existing database
    db = pickledb.load(db_path, auto_dump=True)

# You can now add or modify the database as needed
# Example: setting another key
db.set('key', 'value')

