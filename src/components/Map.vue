<template>
  <div>
    <l-map :zoom="zoom" :center="center" style="height: 500px; width: 100%">
      <l-tile-layer :url="url" />
      <l-marker :lat-lng="marker" />
      <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            Centre Ambroise Paré 
            <p v-show="showParagraph">
                Centre Ambroise Paré 
                68 rue Aristide Briand 78130 Les Mureaux
            </p>
          </div>
        </l-popup>
      </l-marker>
      <l-marker :lat-lng="withTooltip">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          <div @click="innerClick">
            Centre Ambroise Paré 
            <p v-show="showParagraph">
                Centre Ambroise Paré 
                68 rue Aristide Briand 78130 Les Mureaux
            </p>
          </div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";

export default {
  name: "Example",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
  },
  data() {
    return {
      loading: false,
      show: true,
      enableTooltip: true,
      zoom: 16,
      center: [48.98736470288912, 1.9110482381101495],
      fillColor: "#e4ce7f",
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      marker: latLng(48.98736470288912, 1.9110482381101495),
      withPopup: latLng(48.98736470288912, 1.9110482381101495),
      withTooltip: latLng(48.98736470288912, 1.9110482381101495),
      showParagraph: false,
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction,
      };
    },
    styleFunction() {
      const fillColor = this.fillColor; // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: "#ECEFF1",
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1,
        };
      };
    },
    onEachFeatureFunction() {
      if (!this.enableTooltip) {
        return () => {};
      }
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +
            feature.properties.code +
            "</div><div>nom: " +
            feature.properties.nom +
            "</div>",
          { permanent: false, sticky: true }
        );
      };
    },
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
        this.showParagraph = !this.showParagraph;
    },
  },
  async created() {},
};
</script>
