import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
