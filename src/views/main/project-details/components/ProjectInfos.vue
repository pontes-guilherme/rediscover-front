<template>
  <v-card class="card mx-auto w-100" variant="flat">
    <div class="card__image" ref="projectImage">
      <div class="tags d-flex align-end h-100 ml-10">
        <template v-if="technologies">
          <div class="chip" v-for="tech in techsToShow" :key="tech.id">{{ tech.name }}</div>
        </template>

        <template v-if="tags">
          <div class="chip" v-for="tag in tagsToShow" :key="tag.id">{{ tag.name }}</div>
        </template>

        <template v-if="!technologies">
          <div class="chip">PHP</div>
        </template>
        <template v-if="!tags">
          <div class="chip">Back-end</div>
        </template>
      </div>
    </div>

    <div class="content-wrapper px-10">
      <div class="card__title mt-5 text-h6 font-weight-black">
        {{
          (repository_owner && repository_name)
              ? `${repository_owner}/${repository_name}`
              : 'user/project-name'
        }}
      </div>

      <div class="card__content mt-5 mb-5 text-grey-darken-1">
        {{
          description || `Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque
              sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.Maecenas vitae mattis tellus.Nullam quis
              imperdiet augue.Vestibulum auctor ornare leo, non suscipit magna interdum eu.Curabitur pellentesque nibh nibh,
              at maximus ante fermentum sit amet.Pellentesque commodo lacus at sodales sodales.Quisque sagittis orci ut diam
              condimentum, vel euismod erat placerat.In iaculis arcu eros, eget tempus orci facilisis id.Praesent lorem
              orci, mattis non efficitur id, ultricies vel nibh.Sed volutpat lacus vitae gravida viverra.Fusce vel tempor
              elit.Proin tempus,`
        }}
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import {generateGradient, hashString} from "@/utils/colors.util";
import {computed, ComputedRef, ref, watch} from "vue";
import {Technology} from "@/models/Technology.model";
import {Tag} from "@/models/Tag.model";

const props = defineProps({
  repository_owner: {
    type: String,
    required: false
  },
  repository_name: {
    type: String,
    required: false
  },
  tags: {
    type: Array<Tag>,
    required: false
  },
  technologies: {
    type: Array<Technology>,
    required: false
  },
  description: {
    type: String,
    required: false
  }
})

const projectImage = ref<HTMLDivElement | null>(null)

const techsToShow: ComputedRef<Technology[]> = computed(() => {
  return props.technologies?.slice(0, 1) || [];
});

const tagsToShow: ComputedRef<Tag[]> = computed(() => {
  return props.tags?.slice(0, 1) || [];
});

const getProjectGradient = (): string => {
  // hash the project owner/name to get a unique color
  const hash = hashString(`${props.repository_owner}/${props.repository_name}`)
  return generateGradient(hash)
}

const changeGradient = () => {
  if (!projectImage.value) return

  projectImage.value.style.background = getProjectGradient() || 'white'
}

const setLooksForProject = () => {
  if (!props.repository_owner || !props.repository_name) return

  changeGradient()
}

watch(() => props, () => {
  setLooksForProject()
}, {deep: true})
</script>

<style scoped lang="scss">
.card {
  height: 600px;

  &__image {
    background-color: rgb(var(--v-theme-grey));

    height: 260px;
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

  margin-bottom: 15px;

  &:not(:first-child) {
    margin-left: 10px;
  }
}

.card__content {
  line-height: 2rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 8; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
