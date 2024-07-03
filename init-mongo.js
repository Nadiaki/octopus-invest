db.auth('octopus-admin', 'octopus-admin-password')

db = db.getSiblingDB('octopus')

db.createUser({
  user: 'octopus',
  pwd: 'octopus-password',
  roles: [
    {
      role: 'readWrite',
      db: 'octopus',
    },
  ],
});

db.createCollection('user');