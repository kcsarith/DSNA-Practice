// starter code below
import random

random.seed(1) # Setting random number generator seed for repeatability

NUM_DRONES = 10000
AIRSPACE_SIZE = 128000 # Meters.
CONFLICT_RADIUS = 500 # Meters.

def count_conflicts(drones, conflict_radius):
  # LOOP

def gen_coord():
  return int(random.random() * AIRSPACE_SIZE)

positions = [[gen_coord(), gen_coord()] for i in range(NUM_DRONES)]
conflicts = count_conflicts(positions, CONFLICT_RADIUS)

print("Drones in conflict: {}".format(conflicts))
