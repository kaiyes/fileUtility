import express from 'express';
import loadJsonFile from 'load-json-file';
import { writeFile } from 'fs';
import { groupBy, merge } from 'lodash';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

const fields = [
  {
    variation: [
      {
        icon: require('./field_icons/crown/crown_darkblue.png'),
      },
      {
        icon: require('./field_icons/crown/crown_deeppink.png'),
      },
      {
        icon: require('./field_icons/crown/crown_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/crown/crown_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/crown/crown_forestgreen.png'),
      },
      {
        icon: require('./field_icons/crown/crown_frenchblue.png'),
      },
      {
        icon: require('./field_icons/crown/crown_gold.png'),
      },
      {
        icon: require('./field_icons/crown/crown_grey.png'),
      },
      {
        icon: require('./field_icons/crown/crown_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/crown/crown_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/cake_field/cake_field_darkblue.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_deeppink.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_forestgreen.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_frenchblue.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_gold.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_grey.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/cake_field/cake_field_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/center_field/center_field_darkblue.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_deeppink.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_forestgreen.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_frenchblue.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_gold.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_grey.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/center_field/center_field_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/closely_field/closely_field_darkblue.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_deeppink.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_forestgreen.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_frenchblue.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_gold.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_grey.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/closely_field/closely_field_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/diamond/diamond_darkblue.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_deeppink.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_forestgreen.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_frenchblue.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_gold.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_grey.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_turquoise.png'),
      },
      {
        icon: require('./field_icons/diamond/diamond_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/dome/dome_darkblue.png'),
      },
      {
        icon: require('./field_icons/dome/dome_deeppink.png'),
      },
      {
        icon: require('./field_icons/dome/dome_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/dome/dome_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/dome/dome_forestgreen.png'),
      },
      {
        icon: require('./field_icons/dome/dome_frenchblue.png'),
      },
      {
        icon: require('./field_icons/dome/dome_gold.png'),
      },
      {
        icon: require('./field_icons/dome/dome_grey.png'),
      },
      {
        icon: require('./field_icons/dome/dome_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/dome/dome_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/dome_light/dome_light_darkblue.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_deeppink.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_forestgreen.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_frenchblue.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_gold.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_grey.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/dome_light/dome_light_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/floodlights/floodlights_darkblue.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_deeppink.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_forestgreen.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_frenchblue.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_gold.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_grey.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/floodlights/floodlights_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/flower/flower_darkblue.png'),
      },
      {
        icon: require('./field_icons/flower/flower_deeppink.png'),
      },
      {
        icon: require('./field_icons/flower/flower_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/flower/flower_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/flower/flower_forestgreen.png'),
      },
      {
        icon: require('./field_icons/flower/flower_frenchblue.png'),
      },
      {
        icon: require('./field_icons/flower/flower_gold.png'),
      },
      {
        icon: require('./field_icons/flower/flower_grey.png'),
      },
      {
        icon: require('./field_icons/flower/flower_turquoise.png'),
      },
      {
        icon: require('./field_icons/flower/flower_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/hard_rock/hard_rock_darkblue.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_deeppink.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_forestgreen.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_frenchblue.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_gold.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_grey.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/hard_rock/hard_rock_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/king_crown/king_crown_darkblue.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_deeppink.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_forestgreen.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_frenchblue.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_gold.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_grey.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/king_crown/king_crown_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/light_diamond/light_diamond_darkblue.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_deeppink.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_forestgreen.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_frenchblue.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_gold.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_grey.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/light_diamond/light_diamond_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/open_center/open_center_darkblue.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_deeppink.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_forestgreen.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_frenchblue.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_gold.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_grey.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/open_center/open_center_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/open_oval/open_oval_darkblue.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_deeppink.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_forestgreen.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_frenchblue.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_gold.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_grey.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/open_oval/open_oval_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/rock/rock_darkblue.png'),
      },
      {
        icon: require('./field_icons/rock/rock_deeppink.png'),
      },
      {
        icon: require('./field_icons/rock/rock_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/rock/rock_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/rock/rock_forestgreen.png'),
      },
      {
        icon: require('./field_icons/rock/rock_frenchblue.png'),
      },
      {
        icon: require('./field_icons/rock/rock_gold.png'),
      },
      {
        icon: require('./field_icons/rock/rock_grey.png'),
      },
      {
        icon: require('./field_icons/rock/rock_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/rock/rock_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/rock_open/rock_open_darkblue.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_deeppink.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_forestgreen.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_frenchblue.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_gold.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_grey.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/rock_open/rock_open_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/roof_open/roof_open_darkblue.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_deeppink.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_forestgreen.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_frenchblue.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_gold.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_grey.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/roof_open/roof_open_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/superdome/superdome_darkblue.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_deeppink.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_forestgreen.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_frenchblue.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_gold.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_grey.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/superdome/superdome_yellow.png'),
      },
    ],
  },
  {
    variation: [
      {
        icon: require('./field_icons/truss/truss_darkblue.png'),
      },
      {
        icon: require('./field_icons/truss/truss_deeppink.png'),
      },
      {
        icon: require('./field_icons/truss/truss_mediumpurple.png'),
      },
      {
        icon: require('./field_icons/truss/truss_deepskyblue.png'),
      },
      {
        icon: require('./field_icons/truss/truss_forestgreen.png'),
      },
      {
        icon: require('./field_icons/truss/truss_frenchblue.png'),
      },
      {
        icon: require('./field_icons/truss/truss_gold.png'),
      },
      {
        icon: require('./field_icons/truss/truss_grey.png'),
      },
      {
        icon: require('./field_icons/truss/truss_paleturquoise.png'),
      },
      {
        icon: require('./field_icons/truss/truss_yellow.png'),
      },
    ],
  },
];

async function addLine() {
  // functionality
  const newArr = fields.map((item) => Object.assign({}, item, { name: 's' }));

  function finished() {
    console.log('finished');
  }

  console.log(newArr);
  // await writeFile(
  //   `./dua_bn_new.json`,
  //   JSON.stringify(ultimateArr, null),
  //   finished
  // );
}

app.listen(port, () => {
  return addLine();
});
