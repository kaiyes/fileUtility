const { ComfyUIClient } = require('comfy-ui-client');

// Your prompt / workflow
const basePrompt = {
  '5': {
    inputs: {
      width: 256,
      height: 256,
      batch_size: 1
    },
    class_type: 'EmptyLatentImage',
    _meta: {
      title: 'Empty Latent Image'
    }
  },
  '6': {
    inputs: {
      text: 'below\n',
      clip: ['29', 1]
    },
    class_type: 'CLIPTextEncode',
    _meta: {
      title: 'CLIP Text Encode (Prompt)'
    }
  },
  '8': {
    inputs: {
      samples: ['30', 0],
      vae: ['10', 0]
    },
    class_type: 'VAEDecode',
    _meta: {
      title: 'VAE Decode'
    }
  },
  '9': {
    inputs: {
      filename_prefix: 'ComfyUI',
      images: ['8', 0]
    },
    class_type: 'SaveImage',
    _meta: {
      title: 'Save Image'
    }
  },
  '10': {
    inputs: {
      vae_name: 'diffusion_pytorch_model.safetensors'
    },
    class_type: 'VAELoader',
    _meta: {
      title: 'Load VAE'
    }
  },
  '11': {
    inputs: {
      clip_name1: 'clip_l.safetensors',
      clip_name2: 't5xxl_fp8_e4m3fn.safetensors',
      type: 'flux'
    },
    class_type: 'DualCLIPLoader',
    _meta: {
      title: 'DualCLIPLoader'
    }
  },
  '27': {
    inputs: {
      unet_name: 'flux1-schnell-Q4_0.gguf'
    },
    class_type: 'UnetLoaderGGUF',
    _meta: {
      title: 'Unet Loader (GGUF)'
    }
  },
  '29': {
    inputs: {
      lora_name: {
        content: 'comix_style_flux_train_replicate.safetensors',
        image: null
      },
      strength_model: 1,
      strength_clip: 1,
      example: '[none]',
      model: ['27', 0],
      clip: ['11', 0]
    },
    class_type: 'LoraLoader|pysssss',
    _meta: {
      title: 'Lora Loader 🐍'
    }
  },
  '30': {
    inputs: {
      seed: 1082866278638106,
      steps: 4,
      cfg: 1,
      sampler_name: 'euler',
      scheduler: 'simple',
      denoise: 1,
      model: ['27', 0],
      positive: ['6', 0],
      negative: ['31', 0],
      latent_image: ['5', 0]
    },
    class_type: 'KSampler',
    _meta: {
      title: 'KSampler'
    }
  },
  '31': {
    inputs: {
      text: 'eyes, face, nsfw, female, nude, realistic',
      clip: ['29', 1]
    },
    class_type: 'CLIPTextEncode',
    _meta: {
      title: 'CLIP Text Encode (Prompt)'
    }
  }
};

// Array of items for the prompts
const items = [
  'lake',
  'cloud',
  'weather',
  'day',
  'year',
  'month',
  'week',
  'hour',
  'minute',
  'second',
  'chair',
  'desk',
  'bed',
  'table',
  'game',
  'sport',
  'music',
  'picture',
  'photo',
  'shelf',
  'box',
  'container',
  'bottle',
  'plate',
  'bowl',
  'spoon',
  'knife',
  'coffee',
  'tea',
  'milk',
  'bread',
  'fruit',
  'vegetable',
  'garden',
  'park',
  'street',
  'building',
  'room',
  'door',
  'window',
  'pillow',
  'blanket',
  'carpet',
  'sofa',
  'glass',
  'cup',
  'fork',
  'paper',
  'pen',
  'pencil',
  'eraser',
  'ruler',
  'glue',
  'tape',
  'scissors',
  'magazine',
  'newspaper',
  'tv',
  'radio',
  'battery',
  'calendar',
  'friend',
  'parent',
  'child',
  'brother',
  'sister',
  'cousin',
  'uncle',
  'aunt',
  'nephew',
  'niece',
  'grandparent',
  'grandchild',
  'neighbor',
  'colleague',
  'storm',
  'rain',
  'sunshine',
  'moonlight',
  'beach',
  'island',
  'map',
  'tourist',
  'traveler',
  'passport',
  'plane',
  'bus',
  'taxi',
  'hotel',
  'restaurant',
  'cafe',
  'shop',
  'market',
  'store',
  'office',
  'folder',
  'drawer',
  'closet',
  'ceiling',
  'wall',
  'floor',
  'rug',
  'mattress',
  'blinds',
  'fan',
  'air',
  'heater',
  'lamp',
  'light',
  'bulb',
  'switch',
  'plug',
  'cord',
  'wire',
  'adapter',
  'power',
  'generator',
  'engine'
];

// Create client
const serverAddress = '127.0.0.1:8188';
const clientId = 'baadbabe-b00b-4206-9420-deadd00d1337';
const client = new ComfyUIClient(serverAddress, clientId);

// Connect to server
(async () => {
  await client.connect();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Clone the basePrompt to avoid modifying it directly
    const prompt = JSON.parse(JSON.stringify(basePrompt));

    // Set the text prompt for the current item
    prompt['6'] = {
      inputs: {
        text: `${item}, vector graphics style, flat colors, illustration, transparent background`,
        clip: ['29', 1]
      },
      class_type: 'CLIPTextEncode',
      _meta: {
        title: 'CLIP Text Encode (Prompt)'
      }
    };

    // Set a custom filename prefix based on the current item
    const customFilename = item.replace(/[\s,]+/g, '_'); // Replace spaces and commas with underscores
    prompt['9'].inputs.filename_prefix = `${customFilename}`;

    // Generate images
    const images = await client.getImages(prompt);

    // Define the output directory
    const outputDir = `./outputPics/`;

    await client.saveImages(images, outputDir);
  }
  // Disconnect
  await client.disconnect();
})();
