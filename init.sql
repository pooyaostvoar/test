SELECT 'CREATE DATABASE pricing_db' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'pricing_db')\gexec
