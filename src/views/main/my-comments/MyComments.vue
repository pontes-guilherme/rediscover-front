<template>
  <Content>
    <div class="page mt-16">
      <section class="section comments">
        <div class="title">
          <h1 class="text-md-h4 text-sm-h6 font-weight-bold text-center">My Comments</h1>
        </div>

        <v-card class="mt-10">
          <v-card-text>
            <div class="project-groups mt-10">
              <v-expansion-panels variant="accordion">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="picture">
                      <img src="@/assets/pictures/laravel.svg" alt="project picture"/>
                    </div>

                    <span class="font-weight-medium">Laravel/Framework</span>

                    <template v-slot:actions="{ expanded }">
                      <v-icon :color="!expanded ? 'primary' : ''"
                              :icon="expanded ? 'mdi-chevron-down' : 'mdi-chevron-right'"></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <Comment content="Lorem ipsum dolor sit amet consectetur adipiscing eli0t Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet" />
                    <Comment content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores" />
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-expansion-panels variant="accordion">
                <v-expansion-panel>
                  <v-expansion-panel-title>
                    <div class="picture">
                      <img src="@/assets/pictures/laravel.svg" alt="project picture"/>
                    </div>

                    <span class="font-weight-medium">Laravel/Docs</span>

                    <template v-slot:actions="{ expanded }">
                      <v-icon :color="!expanded ? 'primary' : ''"
                              :icon="expanded ? 'mdi-chevron-down' : 'mdi-chevron-right'"></v-icon>
                    </template>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    <Comment content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores" />
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-card-text>
        </v-card>
      </section>
    </div>
  </Content>
</template>

<script setup lang="ts">
import Content from "@/components/main/Content.vue";
import Comment from "@/components/main/Comment.vue";
</script>

<style scoped lang="scss">
.page {
  padding: 0 15%;

  @media (max-width: 1024px) {
    padding: 0 5%;
  }

  @media (max-width: 768px) {
    padding: 0 2%;
  }
}

.picture {
  width: 50px;
  height: 50px;
  overflow: hidden;
  margin-right: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.v-expansion-panels, .v-expansion-panel {
  :deep(.v-expansion-panel-title__overlay) {
    background-color: rgb(0, 0, 0, 0.3);
  }

  box-shadow: none;

  :deep(*) {
    box-shadow: none;
  }
}
</style>
