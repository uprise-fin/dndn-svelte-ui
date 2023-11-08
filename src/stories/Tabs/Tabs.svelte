<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from './type'

  export let tabQuantity = 2

  let activeTab = 'tab1'
  function switchTab(tab: string) {
    activeTab = tab
  }
</script>

<div class="tab-container">
  {#each Array.from({ length: tabQuantity }) as _, index}
    <div
      class="tab-button {activeTab === `tab${index + 1}` ? 'active-tab' : 'inactive-tab'}"
      on:click={() => switchTab(`tab${index + 1}`)}
    >
      Tab {index + 1}
    </div>
  {/each}
</div>

<style lang="scss">
  /* 탭 메뉴 전체 컨테이너 */
  .tab-container {
    display: flex;
    width: 375px;
    align-items: flex-start;
  }

  /* 개별 탭 버튼 */
  .tab-button {
    display: flex;
    padding-top: 14px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    flex: 1 0 0;

    /* 선택된 탭 폰트 */
    color: #252542;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */

    /* 선택된 탭 아래 선 스타일 */
    position: relative;
    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background: #252542;
      position: absolute;
      bottom: -10px;
      left: 0;
      opacity: 0;
    }
  }
  /* 선택되면 선 표시 */
  .tab-button.active-tab::after {
    opacity: 1;
  }

  /* 선택 안된 탭 */
  .tab-button:not(.active-tab) {
    color: #b0b0ba;
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
  }
</style>
