<template>
  <v-card class="card mx-auto" variant="flat" @click="goToProject">

    <template v-if="!project">
      <div class="card__image position-relative">
        <div class="tags position-absolute d-flex">
          <div class="chip">PHP</div>
          <div class="chip">Back-end</div>
        </div>
      </div>

      <v-card-title class="mt-5">
        user/project-name
      </v-card-title>

      <v-card-subtitle class="mt-3 mb-5">
        lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </v-card-subtitle>
    </template>

    <template v-if="project">
      <div class="card__image position-relative" ref="projectImage">
        <div class="tags position-absolute d-flex">
          <div class="chip" v-for="tech in techsToShow" :key="tech.id">{{ tech.name }}</div>
          <div class="chip" v-for="tag in tagsToShow" :key="tag.id">{{ tag.name }}</div>
        </div>
      </div>

      <v-card-title class="mt-5">
        {{ project.repository_owner }}/{{ project.repository_name }}
      </v-card-title>

      <v-card-subtitle class="mt-3 mb-5">
        {{ project.description }}
      </v-card-subtitle>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {Project} from "@/models/Project.model";
import {computed, ComputedRef, onMounted, PropType, ref, watch} from "vue";
import {Tag} from "@/models/Tag.model";
import {Technology} from "@/models/Technology.model";
import {generateGradient, hashString} from "@/utils/colors.util";

const router = useRouter()

const projectImage = ref<HTMLDivElement | null>(null)

const {tags, project, technologies} = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: false
  },
  tags: {
    type: Array<Tag>,
    required: false
  },
  technologies: {
    type: Array<Technology>,
    required: false
  }
})

const techsToShow: ComputedRef<Technology[]> = computed(() => {
  return technologies?.slice(0, 1) || [];
});

const tagsToShow: ComputedRef<Tag[]> = computed(() => {
  return tags?.slice(0, 1) || [];
});

const goToProject = () => {
  router.push('/projects/1')
}

const getProjectGradient = (): string => {
  // hash the project owner/name to get a unique color
  const hash = hashString(`${project?.repository_owner}/${project?.repository_name}`)
  return generateGradient(hash)
}

const changeGradient = () => {
  if (!projectImage.value) return

  projectImage.value.style.background = getProjectGradient() || 'white'
}

const setLooksForProject = () => {
  changeGradient()
}

watch(() => project, () => {
  setLooksForProject()
}, {deep: true})

onMounted(() => {
  setLooksForProject()
})
</script>

<style scoped lang="scss">
.card {
  cursor: pointer;
  user-select: none;

  &__image {
    background-color: rgb(var(--v-theme-grey));

    height: 220px;
    border-radius: inherit;

    .tags {
      top: 20px;
      left: 20px;
    }
  }
}

.chip {
  background-color: white;
  padding: 5px 10px;
  border-radius: 15px;
  color: black;
  font-size: 1rem;
  font-weight: bold;

  &:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
