var APP_DATA = {
  "scenes": [
    {
      "id": "0-studio-c",
      "name": "Studio C",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5398620859103715,
          "pitch": -0.18797039388388193,
          "rotation": 7.0685834705770345,
          "target": "6-studio-c-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-studio-b---cuusc-set",
      "name": "Studio B - CU@USC Set",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5426092259481994,
          "pitch": 0.04671315201213844,
          "rotation": 0,
          "target": "3-studio-b-hallway"
        },
        {
          "yaw": 1.9587277254833557,
          "pitch": 0.027835069314031458,
          "rotation": 0,
          "target": "2-control-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-control-room",
      "name": "Control Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.285294916645892,
          "pitch": 0.3042698670312056,
          "rotation": 0,
          "target": "10-audio-booth"
        },
        {
          "yaw": 3.0592057720702597,
          "pitch": 0.2674175262314584,
          "rotation": 0,
          "target": "3-studio-b-hallway"
        },
        {
          "yaw": 2.453510916669366,
          "pitch": -0.015779377774878256,
          "rotation": 4.71238898038469,
          "target": "1-studio-b---cuusc-set"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-studio-b-hallway",
      "name": "Studio B Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.333180300101512,
          "pitch": 0.35422556140777317,
          "rotation": 0,
          "target": "1-studio-b---cuusc-set"
        },
        {
          "yaw": 0.3922418265855647,
          "pitch": 0.44267304475319413,
          "rotation": 0.7853981633974483,
          "target": "2-control-room"
        },
        {
          "yaw": -0.4471897424815303,
          "pitch": 0.08639888821991093,
          "rotation": 7.853981633974483,
          "target": "10-audio-booth"
        },
        {
          "yaw": -0.6659740938741567,
          "pitch": -0.0929826384852106,
          "rotation": 3.141592653589793,
          "target": "9-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-master-control",
      "name": "Master Control",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1596215279501045,
          "pitch": 0.22829104818434232,
          "rotation": 0.7853981633974483,
          "target": "5-tech-ops"
        },
        {
          "yaw": 2.960452441632997,
          "pitch": 0.12246228596806574,
          "rotation": 4.71238898038469,
          "target": "3-studio-b-hallway"
        },
        {
          "yaw": -3.118822924371953,
          "pitch": 0.10773553582096618,
          "rotation": 1.5707963267948966,
          "target": "6-studio-c-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-tech-ops",
      "name": "Tech Ops",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.39731921039189,
          "pitch": 0.27022040873832154,
          "rotation": 0,
          "target": "4-master-control"
        },
        {
          "yaw": -1.5400804785867095,
          "pitch": 0.1491413257415033,
          "rotation": 0,
          "target": "8-front-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-studio-c-hallway",
      "name": "Studio C Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8935516475673335,
          "pitch": 0.1325021665851942,
          "rotation": 1.5707963267948966,
          "target": "0-studio-c"
        },
        {
          "yaw": 2.4100896875440156,
          "pitch": 0.05792675827712124,
          "rotation": 6.283185307179586,
          "target": "3-studio-b-hallway"
        },
        {
          "yaw": 2.249385922926436,
          "pitch": 0.049386114542883774,
          "rotation": 4.71238898038469,
          "target": "4-master-control"
        },
        {
          "yaw": 0.7562341420933798,
          "pitch": -0.1411341989618542,
          "rotation": 3.141592653589793,
          "target": "8-front-hallway"
        },
        {
          "yaw": 0.6458452436085906,
          "pitch": 0.16038902629869156,
          "rotation": 4.71238898038469,
          "target": "15-lounge"
        },
        {
          "yaw": 0.8440147649389402,
          "pitch": 0.10756835446927937,
          "rotation": 1.5707963267948966,
          "target": "16-editing-room"
        },
        {
          "yaw": 0.7072122029705135,
          "pitch": 0.059020124028275944,
          "rotation": 4.71238898038469,
          "target": "7-conference-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-conference-room",
      "name": "Conference Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "8-front-hallway",
      "name": "Front Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7482224256587493,
          "pitch": 0.03547161042391522,
          "rotation": 1.5707963267948966,
          "target": "7-conference-room"
        },
        {
          "yaw": -1.1227454501983,
          "pitch": 0.09026305689647529,
          "rotation": 3.9269908169872414,
          "target": "16-editing-room"
        },
        {
          "yaw": -2.675322171758454,
          "pitch": 0.12904695394846577,
          "rotation": 0,
          "target": "9-entry"
        },
        {
          "yaw": 0.4386669283275104,
          "pitch": 0.13733335360302767,
          "rotation": 11.780972450961727,
          "target": "11-foyer"
        },
        {
          "yaw": -0.9601288498291041,
          "pitch": 0.05052191720525201,
          "rotation": 1.5707963267948966,
          "target": "15-lounge"
        },
        {
          "yaw": -1.068797434626056,
          "pitch": -0.08187096496073742,
          "rotation": 9.42477796076938,
          "target": "6-studio-c-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.791665318852848,
          "pitch": -0.16943643921667118,
          "rotation": 3.141592653589793,
          "target": "3-studio-b-hallway"
        },
        {
          "yaw": -2.869128161101056,
          "pitch": 0.11116508853516471,
          "rotation": 4.71238898038469,
          "target": "10-audio-booth"
        },
        {
          "yaw": -1.2000848411748475,
          "pitch": 0.10332453872868896,
          "rotation": 0,
          "target": "8-front-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-audio-booth",
      "name": "Audio Booth",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4795980714083115,
          "pitch": 0.365163397493923,
          "rotation": 0.7853981633974483,
          "target": "2-control-room"
        },
        {
          "yaw": -0.6311028093551787,
          "pitch": 0.15921418897880457,
          "rotation": 4.71238898038469,
          "target": "3-studio-b-hallway"
        },
        {
          "yaw": -0.4003594899338605,
          "pitch": 0.17607601746646928,
          "rotation": 7.853981633974483,
          "target": "9-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9711537367526386,
          "pitch": 0.19363303383082808,
          "rotation": 7.0685834705770345,
          "target": "8-front-hallway"
        },
        {
          "yaw": 0.043003848318093674,
          "pitch": 0.15785915548238094,
          "rotation": 0.7853981633974483,
          "target": "14-office-hallway"
        },
        {
          "yaw": -1.5306302337809292,
          "pitch": 0.08737781819522716,
          "rotation": 4.71238898038469,
          "target": "15-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-trojan-vision-office",
      "name": "Trojan Vision Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8266046026306526,
          "pitch": 0.05914487426468007,
          "rotation": 1.5707963267948966,
          "target": "14-office-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-equipment-room",
      "name": "Equipment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6009581403897313,
          "pitch": 0.09550642278683519,
          "rotation": 4.71238898038469,
          "target": "14-office-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-office-hallway",
      "name": "Office Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5028714722557623,
          "pitch": 0.27563583831861926,
          "rotation": 12.566370614359176,
          "target": "12-trojan-vision-office"
        },
        {
          "yaw": 0.4036676683128473,
          "pitch": 0.2253323050460292,
          "rotation": 0,
          "target": "13-equipment-room"
        },
        {
          "yaw": -1.5627997069433377,
          "pitch": 0.07613100983289556,
          "rotation": 0,
          "target": "11-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-lounge",
      "name": "Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7647268163020993,
          "pitch": 0.30392873214079685,
          "rotation": 0,
          "target": "8-front-hallway"
        },
        {
          "yaw": -1.3065143028495818,
          "pitch": 0.20763923681091256,
          "rotation": 0,
          "target": "11-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-editing-room",
      "name": "Editing Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Trojan Vision Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
