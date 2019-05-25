<template>
  <div class="main container">
    <DisplaySmoothie
      :smoothies="this.smoothies"
      :ret-success="this.retSuccess"
      :is-loading="this.isLoading"
      @deleteSmoothie="deleteSmoothie"
    />
    <!-- Fixed floating button -->
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large red" @click="addNewSmoothie">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import Smoothie from "@/models/smoothie";
import DisplaySmoothie from "@/components/DisplaySmoothie";

export default {
  name: "MainSection",
  components: {
    DisplaySmoothie
  },
  data() {
    return {
      title: "Star Smoothies",
      smoothies: [],
      retSuccess: false,
      isLoading: true,
      dbCollection: ["smoothies"]
    };
  },
  mounted() {
    let elems = document.querySelectorAll(".fixed-action-btn"),
      instances = M.FloatingActionButton.init(elems);
    document.title = this.title;
  },
  async created() {
    try {
      // Get smoothies data from firestore and
      // add realtime database listener
      db.collection(this.dbCollection[0]).onSnapshot(this.realtimeSmoothieData);
    } catch (err) {
      this.retSuccess = false;
    }
  },
  methods: {
    addNewSmoothie() {
      this.$router.push("/add-new-smoothie");
    },
    async deleteSmoothie(delSmoothieObj) {
      try {
        await db
          .collection(this.dbCollection[0])
          .doc(delSmoothieObj.id)
          .delete();
        M.toast({ html: `${delSmoothieObj.name} has been deleted` });
      } catch (err) {
        M.toast({
          html: `An error occurred while deleting ${delSmoothieObj.name}`
        });
      }
    },
    realtimeSmoothieData(data) {
      // Reset smoothies array
      this.smoothies.length = 0;
      data.forEach(doc => {
        const smoothie = doc.data();
        // Create new Smoothie object and add to array
        this.smoothies.push(
          new Smoothie(
            doc.id,
            doc.data().name,
            doc.data().price,
            doc.data().slug,
            doc.data().ingredients,
            doc.data().imgSrc
          )
        );
      });
      if (this.smoothies.length === 0) {
        this.smoothies = [];
      }
      this.isLoading = false;
      this.retSuccess = true;
    }
  }
};
</script>

