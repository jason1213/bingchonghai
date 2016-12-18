define({ "api": [  {    "type": "POST",    "url": "/categorys",    "title": "添加分类",    "name": "category_add",    "permission": [      {        "name": "admin"      }    ],    "group": "Category",    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>分类名称</p>"          },          {            "group": "body",            "type": "Number",            "optional": false,            "field": "level",            "description": "<p>分类级别</p>"          },          {            "group": "body",            "type": "Enum",            "optional": true,            "field": "isDelete",            "description": "<p>是否删除<code>yes</code> or <code>no</code></p>"          },          {            "group": "body",            "type": "Number",            "optional": false,            "field": "parentId",            "description": "<p>父分类ID</p>"          },          {            "group": "body",            "type": "Number",            "optional": false,            "field": "creatorId",            "description": "<p>创建者ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 Created\n\nBody:\n{\n  id: 1,\n  name: '农作物,\n  level: 1,\n  isDelete: 'no',\n  parentId: 1,\n  creatorId: 1,\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/category.es",    "groupTitle": "Category"  },  {    "type": "DELETE",    "url": "/categorys/:id",    "title": "删除分类",    "name": "category_del",    "permission": [      {        "name": "admin"      }    ],    "group": "Category",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>分类ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 204 No Content",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/category.es",    "groupTitle": "Category"  },  {    "type": "GET",    "url": "/categores/:id",    "title": "查看分类",    "name": "category_detail",    "permission": [      {        "name": "admin | owner"      }    ],    "group": "Category",    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>分类ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nBody:\n{\n  id: 1,\n  name: '农作物,\n  level: 1,\n  isDelete: 'no',\n  parentId: 1,\n  creatorId: 1,\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/category.es",    "groupTitle": "Category"  },  {    "type": "GET",    "url": "/categorys",    "title": "农业分类列表",    "name": "category_list",    "group": "Category",    "permission": [      {        "name": "admin"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nHeaders:\n{\n  \"X-Content-Record-Total\": 1 // 符合条件的记录总条数，并非当前返回数组的长度\n}\nBody:\n[{\n  id: 1,\n  name: '农作物,\n  level: 1,\n  isDelete: 'no',\n  parentId: 0,\n  creatorId: 1,\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}]",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/category.es",    "groupTitle": "Category"  },  {    "type": "PUT/PATCH",    "url": "/categorys/:id",    "title": "编辑农业分类",    "name": "category_modify",    "permission": [      {        "name": "admin"      }    ],    "group": "Category",    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>分类ID</p>"          }        ],        "body": [          {            "group": "body",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>分类名称</p>"          },          {            "group": "body",            "type": "Number",            "optional": true,            "field": "level",            "description": "<p>分裂级别</p>"          },          {            "group": "body",            "type": "Enum",            "optional": true,            "field": "isDelete",            "description": "<p>是否删除</p>"          },          {            "group": "body",            "type": "Number",            "optional": true,            "field": "parentId",            "description": "<p>父分裂ID</p>"          },          {            "group": "body",            "type": "Number",            "optional": true,            "field": "creatorId",            "description": "<p>创建者ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nBody:\n{\n  id: 1,\n  name: '农作物,\n  level: 1,\n  isDelete: 'no',\n  parentId: 1,\n  creatorId: 1,\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/category.es",    "groupTitle": "Category"  },  {    "type": "POST",    "url": "/users",    "title": "添加用户",    "name": "user_add",    "permission": [      {        "name": "admin"      }    ],    "group": "User",    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>用户语言设置</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>Email 地址</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>密码</p>"          },          {            "group": "body",            "type": "String",            "optional": true,            "field": "language",            "description": "<p>用户语言设置</p>"          },          {            "group": "body",            "type": "Enum",            "optional": true,            "field": "status",            "description": "<p>用户状态<code>disabled</code> or <code>enabled</code></p>"          },          {            "group": "body",            "type": "Enum",            "optional": true,            "field": "role",            "description": "<p>用户角色，<code>admin</code> or <code>number</code></p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 Created\n\nBody:\n{\n  id: 2,\n  name: 'StonePHP',\n  role: 'member',\n  avatar: 'users/a2/21/1.png',\n  email: '269718799@qq.com',\n  status: 'enabled',\n  language: 'zh',\n  isDelete: 'no',\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "DELETE",    "url": "/users/:id",    "title": "删除用户",    "name": "user_del",    "permission": [      {        "name": "admin"      }    ],    "group": "User",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>用户 ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 204 No Content",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "GET",    "url": "/users/:id",    "title": "查看用户",    "name": "user_detail",    "permission": [      {        "name": "admin | owner"      }    ],    "group": "User",    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>用户 ID</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nBody:\n{\n  id: 2,\n  name: 'StonePHP',\n  role: 'member',\n  avatar: 'users/a2/21/1.png',\n  email: '269718799@qq.com',\n  status: 'enabled',\n  language: 'zh',\n  isDelete: 'no',\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "GET",    "url": "/users",    "title": "系统用户列表",    "name": "user_list",    "group": "User",    "permission": [      {        "name": "admin"      }    ],    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nHeaders:\n{\n  \"X-Content-Record-Total\": 1 // 符合条件的记录总条数，并非当前返回数组的长度\n}\nBody:\n[{\n  id: 2,\n  name: 'StonePHP',\n  role: 'member',\n  avatar: 'users/a2/21/1.png',\n  email: '269718799@qq.com',\n  status: 'enabled',\n  language: 'zh',\n  isDelete: 'no',\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}]",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "POST",    "url": "/session",    "title": "登陆",    "name": "user_login",    "permission": [      {        "name": "owner"      }    ],    "group": "User",    "parameter": {      "fields": {        "body": [          {            "group": "body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>登陆的 Email 地址</p>"          },          {            "group": "body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>登陆的密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 Created\nBody:\n{\n  id: 1\n  name: 'Redstone Zhao'\n  email: '13740080@qq.com'\n  role: 'admin'\n  status: 'enabled'\n  isDelete: 'no'\n  auth: {\n    id: 1\n    token: '18ncomhx9npwhf'\n    refreshToken: '92asdxni28sxshdms'\n    expiredAt: '2016-05-27T12:00:01.000Z',\n    onlineIp: '199.199.0.199'\n  }\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "DELETE",    "url": "/session",    "title": "退出",    "name": "user_logout",    "permission": [      {        "name": "owner"      }    ],    "group": "User",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 204 No Content",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "PUT/PATCH",    "url": "/users/:id",    "title": "编辑用户",    "name": "user_modify",    "permission": [      {        "name": "admin | owner"      }    ],    "group": "User",    "parameter": {      "fields": {        "query": [          {            "group": "query",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>用户 ID</p>"          }        ],        "body": [          {            "group": "body",            "type": "String",            "optional": true,            "field": "name",            "description": "<p>用户语言设置</p>"          },          {            "group": "body",            "type": "String",            "optional": true,            "field": "language",            "description": "<p>用户语言设置</p>"          },          {            "group": "body",            "type": "Enum",            "optional": true,            "field": "status",            "description": "<p>用户状态<code>disabled</code> or <code>enabled</code> 仅管理员可用</p>"          },          {            "group": "body",            "type": "Enum",            "optional": true,            "field": "role",            "description": "<p>用户角色，<code>admin</code> or <code>number</code>, 仅管理员可用</p>"          },          {            "group": "body",            "type": "String",            "optional": true,            "field": "password",            "description": "<p>设置的新密码</p>"          },          {            "group": "body",            "type": "String",            "optional": true,            "field": "origPass",            "description": "<p>原密码，在设置新密码的时候必须要携带原始密码</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\nBody:\n{\n  id: 2,\n  name: 'StonePHP',\n  role: 'member',\n  avatar: 'users/a2/21/1.png',\n  email: '269718799@qq.com',\n  status: 'enabled',\n  language: 'zh',\n  isDelete: 'no',\n  createdAt: '2014-09-03T03:15:16.000Z',\n  updatedAt: '2014-09-03T03:15:16.000Z'\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  },  {    "type": "GET",    "url": "/session",    "title": "查询 Session",    "name": "user_session",    "permission": [      {        "name": "owner"      }    ],    "group": "User",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n\nBody:\n{\n  id: 1\n  name: 'Redstone Zhao'\n  email: '13740080@qq.com'\n  role: 'admin'\n  status: 'enabled'\n  isDelete: 'no'\n  auth: {\n    id: 1\n    token: '18ncomhx9npwhf'\n    refreshToken: '92asdxni28sxshdms'\n    expiredAt: '2016-05-27T12:00:01.000Z',\n    onlineIp: '199.199.0.199'\n  }\n}",          "type": "json"        }      ]    },    "version": "1.0.0",    "filename": "src/app/controllers/user.es",    "groupTitle": "User"  }] });
