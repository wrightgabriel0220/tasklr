DROP TABLE IF EXISTS schedules;
DROP TABLE IF EXISTS tasks;

CREATE TABLE schedules (
  id SERIAL PRIMARY KEY,
  span VARCHAR(10) NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL,
  parent_schedule INT NOT NULL,
  start_time TIME NOT NULL,
  duration INT NOT NULL
);