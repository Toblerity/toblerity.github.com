
from fiona import collection
from shapely.geometry import mapping, shape
from rtree import index


def build():
    with collection("data/ne_10m_admin_1_states_provinces_shp.shp", "r") as shapes:
        for s in shapes:
            geom = shape(s['geometry'])
            id = int(s['id'])
            obj = s
            yield (id, geom.bounds, obj)
            
p = index.Property()
p.filename='theindex'
p.overwrite=True
p.storage=index.RT_Disk
p.dimension = 2

idx = index.Index(p.filename, build(),  properties=p, interleaved=True, overwrite=True)

airports = list(idx.nearest((-93.00,42.0,-93.00,42.00), 3, objects=True))

print len(airports)
print airports[0].object['properties']['name']


