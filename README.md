# Client

Project Vue 3 + Phaser 4 + Vite bằng TypeScript (strict). Canvas toàn màn hình, tự resize, một MainScene trống. Độc lập với Studio, HSO, Java và Python; chưa có map, nhân vật, gameplay, kết nối server hoặc database.

## Chạy

Cần Node.js 20.19+ hoặc 22.12+ (khuyên dùng Node 22 LTS).

```bash
npm install
npm run dev
```

Mở http://localhost:5174. Màn hình nền tối trống là trạng thái khởi đầu bình thường.

```bash
npm run typecheck
npm run build
npm run preview
```

Bản production nằm trong dist/. Để chạy dưới đường dẫn con: `npm run build -- --base=/client/`.

## Các file chính

- `src/App.vue`: UI của ứng dụng Vue.
- `src/components/PhaserGame.vue`: tạo/hủy game theo vòng đời Vue; expose game, scene và emit scene-ready.
- `src/game/createGame.ts`: cấu hình Phaser, kích thước và rendering.
- `src/game/scenes/MainScene.ts`: bắt đầu thêm nội dung game tại đây.
- `src/game/EventBus.ts`: cầu nối sự kiện Vue ↔ Phaser. Đăng ký listener cùng với cleanup tương ứng.
- `public/assets/`: nơi đặt PNG/map/atlas sau này; dùng URL có prefix `import.meta.env.BASE_URL` khi cần deploy dưới đường dẫn con.

Phiên bản được pin cùng nhóm phiên bản Studio đang dùng; package-lock.json khóa dependency. Cấu trúc bridge tham khảo [Phaser Vue template chính thức](https://github.com/phaserjs/template-vue); scaffold này được viết tối giản, không kèm demo/assets hoặc script telemetry của template đó.

Toàn bộ mã ứng dụng và Vite config dùng TypeScript; Vue SFC dùng `<script setup lang="ts">`. `npm run build` chạy kiểm tra kiểu bằng vue-tsc trước khi đóng gói. Các file .js trong dist/ là kết quả biên dịch để trình duyệt chạy. Tham khảo [Vue + TypeScript](https://vuejs.org/guide/typescript/overview.html).
