<template>
  <div class="project">
    <div class="project__image d-flex justify-center align-center position-relative" ref="projectImage">
      <div class="backdrop"></div>
      <div class="project__name d-flex justify-center align-center">
        {{ owner }}/{{ repo }}
      </div>
    </div>

    <div class="project__info w-100 mt-5">
      <div class="title-row w-100 d-flex justify-space-between flex-wrap">
        <!--        <div class="title font-weight-bold text-h5 mr-5">Project Name/Application</div>-->
      </div>

      <div class="description mt-10">
        <div class="d-flex justify-space-between align-center">
          <div class="description__title text-h6">Description</div>
          <div class="stars text-h6 d-flex">
            <v-icon icon="mdi-star mr-1"/>
            {{ stars }}
          </div>
        </div>

        <p class="font-weight-regular text-grey-darken-1 mt-2">
          {{ description }}
        </p>
      </div>

      <div class="contributions d-block d-sm-flex justify-space-between text-h6 mt-10 flex-wrap">
        <div class="contributors">
          <div class="title">
            Contributors
          </div>
          <div class="body mt-2">
            <div class="images d-flex">
              <div class="contributor"
                   v-for="contributor in contributors"
                   :key="contributor.id"
              >
                <a :href="`https://github.com/${contributor.login}`" target="_blank">
                  <img
                      class="rounded-circle contributor-avatar mr-3"
                      alt="contributor"
                      :src="contributor.avatar_url"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="last-commit mt-5 mt-sm-0">
          <div class="title">
            Last commit
          </div>
          <div class="body mt-2">
            <div class="row-1 text-body-1">{{ last_commit?.commit?.message || 'Sem commits' }}</div>
            <div class="row-2 text-body-2">{{ formattedCommitDate }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useProjectAddStore} from "@/store/pages/main/projects/add.store";
import {storeToRefs} from "pinia";
import {getOwnerAndRepoFromUrl} from "@/services/github.service";
import {generateGradient, hashString} from "@/utils/colors.util";
import {computed, onMounted, ref, watch} from "vue";

const store = useProjectAddStore();

const {
  loading,
  projectUrl,
  last_commit,
  contributors,
  languages,
  description,
  stars,
} = storeToRefs(store)

const projectImage = ref<HTMLDivElement | null>(null)
const owner = ref('')
const repo = ref('')

const getProjectGradient = (): string => {
  // hash the project owner/name to get a unique color
  const hash = hashString(`${owner.value}/${repo.value}`)
  return generateGradient(hash)
}

const changeGradient = () => {
  if (!projectImage.value) return

  projectImage.value.style.background = getProjectGradient() || 'white'
}

const setOwnerAndRepo = () => {
  const {owner: o, repo: r} = getOwnerAndRepoFromUrl(projectUrl.value)
  owner.value = o
  repo.value = r
}

const setLooksForProject = () => {
  setOwnerAndRepo()
  changeGradient()
}

const formattedCommitDate = computed(() => {
  if (!last_commit.value) return ''

  const date = new Date(last_commit.value.commit.committer.date)
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
})

watch(projectUrl, () => {
  setLooksForProject()
})

onMounted(() => {
  setLooksForProject()
})

</script>

<style scoped lang="scss">
.project {
  &__name {
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    margin: 20px;
    z-index: 2;

    //background-color: rgba(0, 0, 0, 0.1);
    //padding: 10px;
    //border-radius: 5px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    width: 100%;
    height: 300px;

    border-radius: 20px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 20px;

      object-fit: cover;

      @media (max-width: 768px) {
        height: 200px;
      }
    }
  }

  .contributor-avatar {
    width: 50px;
    height: 50px;
  }
}

.backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
  z-index: 1;
}
</style>
