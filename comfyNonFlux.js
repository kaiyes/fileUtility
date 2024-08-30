const { ComfyUIClient } = require('comfy-ui-client');

// Your prompt / workflow
const basePrompt = {
  '3': {
    inputs: {
      seed: 260080513339817,
      steps: 30,
      cfg: 8,
      sampler_name: 'euler_ancestral',
      scheduler: 'normal',
      denoise: 1,
      model: ['11', 0],
      positive: ['6', 0],
      negative: ['7', 0],
      latent_image: ['5', 0]
    },
    class_type: 'KSampler',
    _meta: {
      title: 'KSampler'
    }
  },
  '4': {
    inputs: {
      ckpt_name: 'v1-5-pruned-emaonly.safetensors'
    },
    class_type: 'CheckpointLoaderSimple',
    _meta: {
      title: 'Load Checkpoint'
    }
  },
  '5': {
    inputs: {
      width: 512,
      height: 512,
      batch_size: 1
    },
    class_type: 'EmptyLatentImage',
    _meta: {
      title: 'Empty Latent Image'
    }
  },
  '6': {
    inputs: {
      text: 'a person, vector graphics style,  flat colors,',
      clip: ['4', 1]
    },
    class_type: 'CLIPTextEncode',
    _meta: {
      title: 'CLIP Text Encode (Prompt)'
    }
  },
  '7': {
    inputs: {
      text:
        'realistic,photo,3d,worst quality,bad quality,bad hands,face, eyes, disfigured,mutated,monochrome,nude,nsfw,',
      clip: ['4', 1]
    },
    class_type: 'CLIPTextEncode',
    _meta: {
      title: 'CLIP Text Encode (Prompt)'
    }
  },
  '8': {
    inputs: {
      samples: ['3', 0],
      vae: ['4', 2]
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
      images: ['8', 0]
    },
    class_type: 'PreviewImage',
    _meta: {
      title: 'Preview Image'
    }
  },
  '11': {
    inputs: {
      lora_name: 'pixel art.safetensors',
      strength_model: 1,
      strength_clip: 1,
      model: ['4', 0],
      clip: ['4', 1]
    },
    class_type: 'LoraLoader',
    _meta: {
      title: 'Load LoRA'
    }
  }
};

// Array of items for the prompts
const items = [
  'person',

  'time',

  'work',

  'school',

  'place',

  'problem',

  'hand',

  'talk',

  'car',

  'book',

  'money',

  'house',

  'knowledge',

  'name',

  'thought',

  'town',

  'food',

  'eye',

  'ear',

  'leg',

  'letter',

  'movie',

  'dog',

  'cat',

  'fish',

  'bird',

  'voice',

  'face',

  'family',

  'world',

  'morning',

  'night',

  'purpose',

  'dream',

  'study',

  'sky',

  'wind',

  'water',

  'fire',

  'earth',

  'tree',

  'mountain',

  'river',

  'sea',

  'sun',

  'moon',

  'star',

  'scenery',

  'flower',

  'airport',

  'train station',

  'road',

  'train',

  'car',

  'nature',

  'animal',

  'color',

  'black',

  'white',

  'red',

  'blue',

  'yellow',

  'small',

  'big',

  'new',

  'old',

  'high',

  'low',

  'long',

  'short',

  'busy',

  'quiet',

  'energetic',

  'sad',

  'happy',

  'unhappiness',

  'relief',

  'illness',

  'happiness',

  'sleepy',

  'comfortable',

  'boredom',

  'clock',

  'mirror',

  'telephone',

  'mobile phone',

  'email',

  'letter',

  'joy',

  'regret',

  'memory',

  'reason',

  'scene',

  'failure',

  'success',

  'progress',

  'change',

  'opportunity',

  'emotion',

  'heart'
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
      class_type: 'CLIPTextEncode',
      inputs: {
        clip: ['4', 1],
        text: `${item}, vector graphics style,  flat colors,`
      }
    };

    prompt['9'] = {
      class_type: 'CLIPTextEncode',
      inputs: {
        filename_prefix: '',
        images: ['8', 0]
      }
    };

    // Generate images
    const images = await client.getImages(prompt);

    // Define the output directory
    const outputDir = `./outputPics/`;

    await client.saveImages(images, outputDir);
  }
  // Disconnect
  await client.disconnect();
})();
