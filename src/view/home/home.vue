<template>
  <div>
    <div class="nav-bar">前端代码锦集</div>
    <div style="padding: 10px">
      <n-grid x-gap="10" y-gap="10" cols="2 s:2 m:4 l:6 xl:8 2xl:12" responsive="screen">
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magicmenu/1.png" alt="" />
            </template>
            魔术菜单-01
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicMenu-01" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magicmenu/2.png" />
            </template>
            魔术菜单-02
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicMenu-02" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magicmenu/3.png" />
            </template>
            魔术菜单-03
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicMenu-03" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magicmenu/4.png" />
            </template>
            魔术菜单-04
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicMenu-04" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/dynamicmenu/1.png" />
            </template>
            灵动菜单-01
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/dynamicMenu-01" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magicicon/1.png" />
            </template>
            魔术图标-01
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicIcon-01" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/colorfulbutton/1.png" />
            </template>
            炫彩按钮-01
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/colorfulButton-01" strong size="small">
                  查看示例
                </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/colorfulbutton/2.png" />
            </template>
            炫彩按钮-02
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/colorfulButton-02" strong size="small">
                  查看示例
                </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magiccard/01.png" />
            </template>
            魔术卡片-01
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicCard-01" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
        <n-gi>
          <n-card :content-style="{ padding: '15px', borderTop: '1px solid #efeff5' }">
            <template #cover>
              <img src="/src/assets/img/magiccard/02.png" />
            </template>
            魔术卡片-02
            <template #action>
              <div style="display: flex; justify-content: right">
                <n-button tag="a" href="/magicCard-02" strong size="small"> 查看示例 </n-button>
              </div>
            </template>
          </n-card>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>

<style lang="scss" scoped>
.nav-bar {
  width: 100%;
  line-height: 4rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-bottom: 1px solid #dadade;
  //background-color: rgba(66, 185, 131, 0.7);
  background: linear-gradient(45deg, #fc5c9c, #c5e3f6, #fccde2, #fcefee);
  box-sizing: border-box;
  padding: 0 20px;
  color: rgba(255, 255, 255, 1);
}
</style>
