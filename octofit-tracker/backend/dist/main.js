"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const codespaceName = process.env.CODESPACE_NAME;
    const codespaceOrigin = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev`
        : undefined;
    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:8000',
        'http://127.0.0.1:3000',
        'http://127.0.0.1:8000',
    ];
    if (codespaceOrigin) {
        allowedOrigins.push(codespaceOrigin);
    }
    app.enableCors({
        origin: allowedOrigins,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: '*',
    });
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`Server is running on port ${port}`);
}
bootstrap().catch((err) => {
    console.error('Error starting server:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map