
let menu = {

  0: {
    id: 0,
    name:'zero',
    counter: 0,
    childIds: [1,2,3,4,5,6],
    counter:0
  },
  1: {
    id: 1,
    name:'one',
    tabindex:0,
    parent:0,
    childIds: [],
    counter:0
  },
  2: {
    name:'two',
    id: 2,
    tabindex:-1,
    parent:0,
    childIds: [],
    counter:0
  },
  3: {
    id: 3,
    name:'three',
    tabindex:-1,
    parent:0,
    childIds: [],
    counter:0

  },
  4: {
    name:'four',
    id: 4,
    tabindex:-1,
    childIds: [11],
    parent:0,
    counter:0
  },
  5: {
    id: 5,
    name:'five',
    tabindex:-1,
    parent:0,
    childIds: [],
    counter:0
  },
  6: {
    id: 6,
    name:'sixx',
    tabindex:-1,
    childIds: [7,8,9],
    parent:0,
    counter:0
  },
  7:{
    id:7,
    name:'seven',
    tabindex:-1,
    parent:6,
    childIds: [],
    counter:0
  },
  8:{
    id:8,
    name:'eight',
    tabindex:-1,
    parent:6,
    childIds: [],
    counter:0
  },
    9:{
    id:9,
    name:'nine',
    childIds:[10],
    tabindex:-1,
    parent:6,
    counter:0
  },
  10:{
    id:10,
    name:'ten',
    tabindex:-1,
    parent:9,
    childIds: [],
    counter:0
  },
    11:{
    id:11,
    name:'eleven',
    childIds:[12],
    tabindex:-1,
    parent:4,
    counter:0
  },
    12:{
    id:12,
    name:'tvelve',
    tabindex:-1,
    parent:11,
    childIds: [],
    counter:0
  }
}

export {menu};
