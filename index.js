var mirador = Mirador.viewer({
  "id": "my-mirador",
  "manifests": {
    "http://127.0.0.1:8887/base_manifest.json": {
      "provider": "KMSKA"
    },
    "http://127.0.0.1:8887/manifest_layers_v2.json": {
      "provider": "IIIF Fridays"
    }
  },
  "windows": [
    {
      "loadedManifest": "https://alecvandenbroeck.github.io/Altaarretabel-demo/Lam_gods_manifest.json",
      "canvasIndex": 0,
      "highlightAllAnnotations": true,
      "sideBarPanel": 'annotations',
      "sideBarOpen": true,
      "thumbnailNavigationPosition": 'far-bottom'
    }
  ],
  "language": "nl",
  "annotations": {
    "htmlSanitizationRuleSet": 'mirador2', // See src/lib/htmlRules.js for acceptable values
  }
});
