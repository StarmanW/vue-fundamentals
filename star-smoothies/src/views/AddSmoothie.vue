<template>
  <div class="addSmoothie">
    <div class="container row add-smoothie-form">
      <form @submit.prevent="submitForm">
        <div class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <input id="smoothieName" type="text" v-model="newSmoothie.name" class="validate">
              <label for="smoothieName">Smoothie Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="price" type="number" v-model="newSmoothie.price" class="validate">
              <label for="price">Price</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12" @keydown.enter="pushChips">
              <div class="chips"/>
            </div>
          </div>
          <div class="row">
            <div class="file-field input-field">
              <i class="btn material-icons right">camera_alt</i>
              <input
                type="file"
                name="uploadSmoothieImg"
                @change="setSmoothieImage($event.target.name, $event.target.files)"
              >
              <div class="file-path-wrapper">
                <input class="file-path validate" type="text">
              </div>
            </div>
          </div>
          <div class="row">
            <button class="submit-btn btn waves-effect waves-light" type="submit" name="submit">
              Add Smoothies
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import sluglify from "slugify";
import Smoothie from "../models/smoothie";

export default {
  name: "AddNewSmoothie",
  data() {
    return {
      title: "Add New Smoothies",
      chips: null,
      newSmoothie: new Smoothie()
    };
  },
  mounted() {
    let elems = document.querySelectorAll(".chips");
    this.chips = M.Chips.init(elems, {
      placeholder: "Ingredients"
    })[0];
    document.title = this.title;
  },
  methods: {
    submitForm() {
      sluglify("asdasd", {
        replacement: "-",
        remove: /[$*_+~.()'";!\\\-:@%^&#<>]/,
        lower: true
      });
    },
    pushChips() {
      // Get new ingredient from chips and push data to object
      this.newSmoothie.ingredients.push(
        this.chips.chipsData[this.chips.chipsData.length - 1].tag
      );
    },
    setSmoothieImage(fieldName, files) {
      const file = files[0];
      console.log(file.size);
      if (file.length > 0) {
        let size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match("image.*")) {
          // check whether the upload is an image
          this.errorDialog = true;
          this.errorText = "Please choose an image file";
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          this.errorDialog = true;
          this.errorText =
            "Your file is too big! Please select an image under 1MB";
        } else {
          // TODO: UPLOAD FILE AND GET PATH
          this.newSmoothie.imgSrc = file;
        }
      }
    }
  }
};
</script>

<style>
.add-smoothie-form {
  max-width: 50rem;
}
.submit-btn {
  min-width: 100%;
}
.chips > input::placeholder {
  color: rgb(87, 87, 87);
}
</style>
