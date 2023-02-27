import { ResultComponent } from './components/result/result.component';
import { QuizInstructionComponent } from './components/quiz-instruction/quiz-instruction.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { QuizBoardComponent } from './components/quiz-board/quiz-board.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: AuthenticationComponent
  },
  {
    path: 'auth', component: AuthenticationComponent
  },
  {
    path: 'quiz-board', component: QuizBoardComponent, canActivate: [AuthguardGuard]
  },
  {
    path: 'quiz-instruction', component: QuizInstructionComponent, canActivate: [AuthguardGuard]
  },
  {
    path: 'result', component: ResultComponent, canActivate: [AuthguardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
