
import { UserService } from 'src/user/service/user.service';
import { Observable } from 'rxjs';
import { Injectable, CanActivate, ExecutionContext, Inject, forwardRef } from '@nestjs/common';
import { Reflector } from '@nestjs/core';


@Injectable()
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        @Inject(forwardRef(() =>UserService))
        private userService: UserService
    ){}


    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get<string>('roles', context.getHandler());

        if(!roles){
            return true;
        }

        const request = context.switchToHttp().getRequest();
        console.log('requstni korish', request);
        const user = request.user;
        return true;
        
    }
}