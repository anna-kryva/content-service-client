import { Metadata } from '@grpc/grpc-js';
import {
  Inject,
  Injectable,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  AuthServiceClient,
} from '../grpc/types/auth/auth';

@Injectable()
export class AuthService implements OnModuleInit {
  private authClientService!: AuthServiceClient;

  constructor(
    @Inject(AUTH_PACKAGE_NAME)
    private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authClientService =
      this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  async validateUser(accessToken: string): Promise<any> {
    try {
      return await this.authClientService
        .validateUser({ accessToken }, new Metadata())
        .toPromise();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
