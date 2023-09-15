<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <div class="page-container d-flex justify-center align-center">
        <v-card>
          <div class="page px-4 px-sm-16 py-10">
            <header>
              <div class="logo-container py-16">
                <img
                  src="../../../assets/logo.png"
                  alt=""
                  class="logo-container__logo"
                >
              </div>
            </header>

            <main>
              <section class="text-grey-darken-1 text-h6 font-weight-light mb-10">
                Enter your email in the field below. We will send you a verification code which you must use in the next
                step to proceed with password recovery
              </section>

              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="E-mail"
                        type="email"
                        required
                      />
                    </v-col>
                  </v-row>

                  <v-row class="mt-10">
                    <v-col cols="12">
                      <router-link to="/admin/password-recovery/step-2" class="text-decoration-none">
                        <v-btn-primary
                          class="px-5"
                          type="submit"
                          block
                        >
                          Send verification code
                        </v-btn-primary>
                      </router-link>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </main>
          </div>
        </v-card>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.page-container {
  .page {
    @media (min-width: 600px) {
      width: 600px;
    }
  }
}

.logo-container {
  &__logo {
    width: 300px;
    height: auto;
  }
}
</style>
