<template>
  <div class="page">
    <div class="container">
      <div class="card py-5 px-6 py-sm-10 px-sm-16 my-10 d-flex flex-column justify-center align-center">
        <div class="card__title">
          <p class="text-black font-weight-bold text-sm-h5">Add a project</p>
        </div>

        <div class="content mt-10 w-100">
          <div class="project">
            <div class="project__image">
              <img src="https://placehold.co/600x400?text=project image" alt="project"/>
            </div>

            <div class="project__info w-100 mt-5">
              <div class="title-row w-100 d-flex justify-space-between flex-wrap">
                <div class="title font-weight-bold text-h5 mr-5">Project Name/Application</div>
                <div class="stars text-h6 d-flex">
                  <v-icon icon="mdi-star mr-1"/>
                  123
                </div>
              </div>

              <div class="description mt-10">
                <div class="description__title text-h6">Description</div>

                <p class="font-weight-regular text-grey-darken-1 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.<br>
                  Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit amet consectetur
                  adipiscing<br>
                  elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien. Lorem ipsum dolor sit
                  amet consectetur<br> adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                  sapien. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
                  urna. Pellentesque sit
                  amet sapien.
                </p>
              </div>

              <div class="contributions d-block d-sm-flex justify-space-between text-h6 mt-10 flex-wrap">
                <div class="contributors">
                  <div class="title">
                    Contributors
                  </div>
                  <div class="body mt-2">
                    <div class="images">
                      <img class="rounded-circle" src="https://placehold.co/50x50?text=1" alt="contributor"/>
                      <img class="rounded-circle ml-5" src="https://placehold.co/50x50?text=2" alt="contributor"/>
                      <img class="rounded-circle ml-5" src="https://placehold.co/50x50?text=3" alt="contributor"/>
                    </div>
                  </div>
                </div>

                <div class="last-commit mt-5 mt-sm-0">
                  <div class="title">
                    Last commit
                  </div>
                  <div class="body mt-2">
                    <div class="row-1 text-body-1">Closed issue #101</div>
                    <div class="row-2 text-body-2">2022-01-01 10:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="user-written-details mt-16">
            <div class="title text-center">
              <h2>Give more details about the project</h2>
            </div>

            <div class="project-status mt-16">
              <div class="title text-body-1">
                What do you consider to be the current status of this project?
              </div>

              <div class="status-options mt-2 d-flex">
                <div
                  :class="`chip chip--abandoned font-weight-black py-2 px-8 rounded-pill ${selectedStatus === 'abandoned' ? 'selected' : ''}`"
                  @click="changeStatus('abandoned')"
                >
                  Abandoned
                </div>

                <div
                  :class="`chip chip--inactive font-weight-black py-2 px-8 rounded-pill ml-3 ${selectedStatus === 'inactive' ? 'selected' : ''}`"
                  @click="changeStatus('inactive')"
                >
                  Inactive
                </div>

                <div
                  :class="`chip chip--deprecated font-weight-black py-2 px-8 rounded-pill ml-3 ${selectedStatus === 'deprecated' ? 'selected' : ''}`"
                  @click="changeStatus('deprecated')"
                >
                  Deprecated
                </div>
              </div>
            </div>

            <div class="reason mt-10">
              <div class="title text-body-1">
                Why did you abandoned/inactivated the project?
              </div>

              <v-textarea class="w-100 mt-2"></v-textarea>
            </div>

            <div class="reason mt-10">
              <div class="title text-body-1">
                What do you wish for this project's future?
              </div>

              <v-textarea class="w-100 mt-2"></v-textarea>
            </div>
          </div>

          <div class="tags mt-10">
            <div class="title text-body-1">
              Select the technologies involved in this project
            </div>

            <div class="tech-chips mt-2 d-flex">
              <div
                :class="`chip tech-chip font-weight-black py-2 px-4 rounded-pill ${isTechSelected(tech) ? 'selected' : ''}`"
                @click="toggleTechnology(tech)"
                v-for="tech in technologies"
                :key="tech"
              >
                {{ tech }}
              </div>
            </div>
          </div>

          <div class="tags mt-10">
            <div class="title text-body-1">
              Select the tags that fit this project
            </div>

            <div class="tag-chips mt-2 d-flex">
              <div
                :class="`chip tag-chip font-weight-black py-2 px-4 rounded-pill ${isTagSelected(tag) ? 'selected' : ''}`"
                @click="toggleTag(tag)"
                v-for="tag in tags"
                :key="tag"
              >
                {{ tag }}
              </div>
            </div>
          </div>

          <div class="d-flex justify-center align-center">
            <v-btn-primary class="btn-add mt-6">Save</v-btn-primary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const selectedStatus = ref('');
const selectedTechnologies = ref<string[]>([]);
const selectedTags = ref<string[]>([]);

const changeStatus = (status: string) => {
  selectedStatus.value = status;
}

const toggleTechnology = (technology: string) => {
  if (selectedTechnologies.value.includes(technology)) {
    selectedTechnologies.value = selectedTechnologies.value.filter(tech => tech != technology)
  } else {
    selectedTechnologies.value.push(technology)
  }
}

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(tech => tech != tag)
  } else {
    selectedTags.value.push(tag)
  }
}

const isTechSelected = (technology: string) => {
  return selectedTechnologies.value.includes(technology)
}

const isTagSelected = (tag: string) => {
  return selectedTags.value.includes(tag)
}

const technologies = [
  'Java',
  'Spring Boot',
  'PHP',
  'Laravel',
  'Symphony',
  'Zend',
  'Python',
  'Flask',
  'FastAPI',
  'Javascript',
  'Node',
  'Express',
  'NestJS',
  'ReactJS',
  'React Native',
  'VueJS',
  'Angular',
  'Svelte',
  'PostgreSQL',
  'Mysql',
  'MongoDB',
];

const tags = [
  'Back-End',
  'Front-End',
  'Full Stack',
  'Compilers',
  'Tools',
  'Security',
  'Learn in Public',
];
</script>

<style scoped lang="scss">

.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 90%;
  }
}

.card {
  width: 100%;
  background-color: white;
  border-radius: 20px;
  min-width: 50vw;

  @media (max-width: 1200px) {
    min-width: 90%;
  }
}

.project {
  &__image {
    width: 100%;

    img {
      width: 100%;
      height: 350px;
      border-radius: 20px;

      object-fit: cover;

      @media (max-width: 768px) {
        height: 200px;
      }
    }
  }
}

.btn-add {
  min-width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
}

.chip {
  box-sizing: border-box;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s ease filter;

  &:not(.selected):hover {
    filter: none;
  }

  &:not(.selected) {
    filter: grayscale(100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 10px;
  }
}

.status-options {
  flex-wrap: wrap;

  .chip {
    &--abandoned {
      background-color: rgba(255, 0, 0, 0.4);
    }

    &--inactive {
      background-color: rgba(255, 153, 0, 0.4);
    }

    &--deprecated {
      background-color: rgba(66, 0, 255, 0.4);
    }
  }
}

.tech-chips, .tag-chips {
  flex-wrap: wrap;

  max-height: 300px;
  overflow-y: auto;

  padding-right: 10px;

  .tech-chip, .tag-chip {
    background-color: rgb(var(--v-theme-grey));
    margin-bottom: 10px;

    margin-right: 10px;

    &.selected {
      background-color: rgb(var(--v-theme-primary-lighten-3));
      color: white;
    }
  }
}
</style>
