FULL_CAP_DATA_MAX_HISTORY = {
    'Architectural and Fine Arts Library 1': 27,
    'Architectural and Fine Arts Library 2': 362,
    'Architectural and Fine Arts Library 3': 220,
    'Butler Library 2': 729,
    'Butler Library 3': 438,
    'Butler Library 4': 414,
    'Butler Library 301': 292,
    'Butler Library 5': 236,
    'Butler Library 6': 255,
    'Butler Library stk': 245,
    "JJ's Place": 185,
    'John Jay Dining Hall': 319,
    'Lehman Library 2': 213,
    'Lehman Library 3': 700,
    'Lerner 1': 168,
    'Lerner 2': 362,
    'Lerner 3': 357,
    'Lerner 4': 354,
    'Lerner 5': 373,
    'Roone Arledge Auditorium': 923,
    'Science and Engineering Library': 234,
    'Starr East Asian Library': 257,
    'Uris/Watson Library': 1046
}

FULL_CAP_DATA = {}

def resize_full_cap_data():
    for key, value in FULL_CAP_DATA_MAX_HISTORY.items():
        FULL_CAP_DATA[key] = int(value*0.90)