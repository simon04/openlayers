import Map from '../../../src/ol/Map.js';
import View from '../../../src/ol/View.js';
import Feature from '../../../src/ol/Feature.js';
import Point from '../../../src/ol/geom/Point.js';
import VectorLayer from '../../../src/ol/layer/Vector.js';
import VectorSource from '../../../src/ol/source/Vector.js';
import Text from '../../../src/ol/style/Text.js';
import Style from '../../../src/ol/style/Style.js';
import Fill from '../../../src/ol/style/Fill.js';
import Stroke from '../../../src/ol/style/Stroke.js';


const vectorSource = new VectorSource();
let feature;

// scale
feature = new Feature({
  geometry: new Point([-50, 50])
});
feature.setStyle(new Style({
  text: new Text({
    text: 'hello',
    font: '14px sans-serif',
    scale: 2,
    fill: new Fill({
      color: 'red'
    }),
    stroke: new Stroke({
      color: '#000'
    })
  })
}));
vectorSource.addFeature(feature);

// rotate
feature = new Feature({
  geometry: new Point([50, -50])
});
feature.setStyle(new Style({
  text: new Text({
    text: 'upside down',
    font: '14px sans-serif',
    rotation: Math.PI,
    stroke: new Stroke({
      color: 'red',
      width: 2
    })
  })
}));
vectorSource.addFeature(feature);

// rotate with view
feature = new Feature({
  geometry: new Point([50, 50])
});
feature.setStyle(new Style({
  text: new Text({
    text: 'rotateWithView',
    rotateWithView: true,
    stroke: new Stroke({
      color: [10, 10, 10, 0.5]
    })
  })
}));
vectorSource.addFeature(feature);

// background and padding
feature = new Feature({
  geometry: new Point([-10, 0])
});
feature.setStyle(new Style({
  text: new Text({
    text: 'hello',
    font: '14px sans-serif',
    padding: [1, 2, 3, 5],
    backgroundFill: new Fill({
      color: 'rgba(55, 55, 55, 0.25)'
    }),
    backgroundStroke: new Stroke({
      color: '#000',
      width: 1
    })
  })
}));
vectorSource.addFeature(feature);

// background and padding
feature = new Feature({
  geometry: new Point([-10, 0])
});
feature.setStyle(new Style({
  text: new Text({
    text: 'hello',
    font: '14px sans-serif',
    padding: [1, 2, 3, 5],
    backgroundFill: new Fill({
      color: 'rgba(55, 55, 55, 0.25)'
    }),
    backgroundStroke: new Stroke({
      color: '#000',
      width: 1
    })
  })
}));
vectorSource.addFeature(feature);


new Map({
  pixelRatio: 1,
  layers: [
    new VectorLayer({
      source: vectorSource
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    resolution: 1,
    rotation: Math.PI / 4
  })
});

render({tolerance: 0.05});
