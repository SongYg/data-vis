# -*- coding: utf-8 -*-
"""
Created on Wed Jul 17 14:11:45 2019

@author: qyx
"""

import json
import numpy as np

dict_data = []

with open('population.json', 'r') as f:
    dict_data=json.loads(f.read())
    print(np.array(dict_data).shape)
    for t in dict_data:
        t[0] = t[0] / 10 + 116.46
        t[1] = t[1] / 10 - 39.92
    #dict_data[0] = dict_data[0] / 10
    #dict_data[1] = dict_data[1] / 10

with open('new_population.json', 'w', encoding='utf-8') as json_file:
    json.dump(dict_data, json_file, ensure_ascii=False)
    print("write json file success!")
