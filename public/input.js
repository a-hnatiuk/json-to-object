export const jsonString = '{\n' +
  '  "$schema": "http://json-schema.org/draft-07/schema#",\n' +
  '  "definitions": {\n' +
  '    "attendees": {\n' +
  '      "type": "object",\n' +
  '      "$id": "#attendees",\n' +
  '      "properties": {\n' +
  '        "userId": {\n' +
  '          "type": "integer"\n' +
  '        },\n' +
  '        "access": {\n' +
  '          "enum": [\n' +
  '            "view",\n' +
  '            "modify",\n' +
  '            "sign",\n' +
  '            "execute"\n' +
  '          ]\n' +
  '        },\n' +
  '        "formAccess": {\n' +
  '          "enum": [\n' +
  '            "view",\n' +
  '            "execute",\n' +
  '            "execute_view"\n' +
  '          ]\n' +
  '        }\n' +
  '      },\n' +
  '      "required": [\n' +
  '        "userId",\n' +
  '        "access"\n' +
  '      ]\n' +
  '    }\n' +
  '  },\n' +
  '  "type": "object",\n' +
  '  "properties": {\n' +
  '    "id": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "string"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "integer"\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "title": {\n' +
  '      "type": "string"\n' +
  '    },\n' +
  '    "description": {\n' +
  '      "type": "string"\n' +
  '    },\n' +
  '    "startDate": {\n' +
  '      "type": "integer"\n' +
  '    },\n' +
  '    "endDate": {\n' +
  '      "type": "integer"\n' +
  '    },\n' +
  '    "attendees": {\n' +
  '      "type": "array",\n' +
  '      "items": {\n' +
  '        "$ref": "#attendees"\n' +
  '      },\n' +
  '      "default": []\n' +
  '    },\n' +
  '    "parentId": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "null"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "string"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "integer"\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "locationId": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "null"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "integer"\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "process": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "null"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "string",\n' +
  '          "format": "regex",\n' +
  '          "pattern": "https:\\\\/\\\\/[a-z]+\\\\.corezoid\\\\.com\\\\/api\\\\/1\\\\/json\\\\/public\\\\/[0-9]+\\\\/[0-9a-zA-Z]+"\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "readOnly": {\n' +
  '      "type": "boolean"\n' +
  '    },\n' +
  '    "priorProbability": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "null"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "integer",\n' +
  '          "minimum": 0,\n' +
  '          "maximum": 100\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "channelId": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "null"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "integer"\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "externalId": {\n' +
  '      "anyOf": [\n' +
  '        {\n' +
  '          "type": "null"\n' +
  '        },\n' +
  '        {\n' +
  '          "type": "string"\n' +
  '        }\n' +
  '      ]\n' +
  '    },\n' +
  '    "tags": {\n' +
  '      "type": "array"\n' +
  '    },\n' +
  '    "form": {\n' +
  '      "type": "object",\n' +
  '      "properties": {\n' +
  '        "id": {\n' +
  '          "type": "integer"\n' +
  '        },\n' +
  '        "viewModel": {\n' +
  '          "type": "object"\n' +
  '        }\n' +
  '      },\n' +
  '      "required": [\n' +
  '        "id"\n' +
  '      ]\n' +
  '    },\n' +
  '    "formValue": {\n' +
  '      "type": "object"\n' +
  '    }\n' +
  '  },\n' +
  '  "required": [\n' +
  '    "id",\n' +
  '    "title",\n' +
  '    "description",\n' +
  '    "startDate",\n' +
  '    "endDate",\n' +
  '    "attendees",\n' +
  '    "process",\n' +
  '    "readOnly",\n' +
  '    "parentId",\n' +
  '    "locationId",\n' +
  '    "priorProbability",\n' +
  '    "channelId",\n' +
  '    "externalId",\n' +
  '    "tags",\n' +
  '    "form",\n' +
  '    "formValue"' +
  '  ]\n' +
  '}\n';