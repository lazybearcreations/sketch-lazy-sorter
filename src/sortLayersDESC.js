import { message } from 'sketch/ui';
import { Document } from 'sketch/dom';

export default function() {

  const document = Document.getSelectedDocument();
  const selectedPage = document.selectedPage;

  let names = selectedPage.layers.map(layer => layer.name);
      names.sort();

  for (var i = 0; i < names.length; i++) {

    var layers = document.getLayersNamed(names[i]);

    // Get only from selected Page
    for (var n = 0; n < layers.length; n++) {
      if (layers[n].getParentPage().selected) {
        layers = layers[n];
        break;
      }
    }

    layers.index = i;

  }

  message("Layers sorted ascending 🙌");

}
