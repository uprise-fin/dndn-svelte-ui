<script lang="ts">
  import type { HTMLAttributeAnchorTarget } from './type'

  export let items = [
    { label: 'First', value: 1 },
    { label: 'Second', value: 2 },
    { label: 'Third', value: 3 },
  ]

  export let tabQty = items.length
  export let activeTabValue = 1

  function switchTab(index: number) {
    activeTabValue = index
  }
</script>

<button on:click={() => (tabQty = 2)}> 2 Tabs </button>
<button on:click={() => (tabQty = 3)}> 3 Tabs </button>

<div class="tab-container">
  {#each items.slice(0, tabQty) as item, index (item.value)}
    <div
      class="tab-button {activeTabValue === item.value ? 'active-tab' : 'inactive-tab'}"
      on:click={() => switchTab(item.value)}
    >
      {item.label}
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
      background: #252542;
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: -10px;
      left: 0;
      opacity: 0;
      content: '';
    }
  }
  /* 선택된 탭 아래 선 표시 */
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
