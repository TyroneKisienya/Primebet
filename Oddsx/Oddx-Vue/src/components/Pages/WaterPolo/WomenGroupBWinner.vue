<template>
  <section class="top_matches">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 gx-0 gx-sm-4">
          <div class="top_matches__main">
            <div class="row w-100 mb-7 mb-md-8">
              <div class="col-12 pe-0">
                <div class="top_matches__content">
                  <div
                    class="top_matches__winnercard p-4 p-sm-5 p-md-6 rounded-3 p2-bg"
                  >
                    <div
                      class="top_matches__winnercard-title d-flex align-items-center gap-2 mb-5 mb-md-6 flex-wrap flex-sm-nowrap"
                    >
                      <img
                       :src="hugary"
                        width="{30}"
                        height="{30}"
                        alt="Icon"
                      />
                      <div class="top_matches__winnercard-obi">
                        <span class="mb-3">Jan 5, 2024, 14:00</span>
                        <h5>
                          European Championships 2024 Women - Group B - Winner
                        </h5>
                      </div>
                    </div>
                    <div class="row gy-2">
                      <div class="col-sm-6 col-lg-6 col-xl-4">
                        <div class="top_matches__winnercard-sctn w-100">
                          <div
                            class="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2"
                          >
                            <span>Hungary</span>
                            <span>4.5</span>
                          </div>
                          <div
                            class="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3 mb-2"
                          >
                            <span>Georgia</span>
                            <span>7.5</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-6 col-xl-4">
                        <div class="top_matches__winnercard-sctn w-100">
                          <div
                            class="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3"
                          >
                            <span>Greece</span>
                            <span>6.5</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-6 col-lg-6 col-xl-4">
                        <div class="top_matches__winnercard-sctn w-100">
                          <div
                            class="top_matches__winnercard-singe d-flex align-items-center justify-content-between n11-bg rounded-2 py-2 px-3"
                          >
                            <span>Italy</span>
                            <span>6.5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import hugary from "@/assets/images/icon/outrights-hugary.png";
</script>

<style scoped></style>
