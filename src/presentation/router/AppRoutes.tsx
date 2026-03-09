import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Auth
import { LoginPage } from '../pages/auth/LoginPage';

// Dashboard
import { TrainingDashboard } from '../pages/TrainingDashboard';

// Module 1
import { CorporativoPage } from '../pages/module1/CorporativoPage';
import { KeyMomentsTimeline } from '../pages/module1/KeyMomentsTimeline';
import { BrandEvolutionTimeline } from '../pages/module1/BrandEvolutionTimeline';
import { QuienesSomos } from '../pages/module1/QuienesSomos';
import { NuestraFilosofia } from '../pages/module1/NuestraFilosofia';
import { Mision } from '../pages/module1/Mision';
import { Vision } from '../pages/module1/Vision';
import { Valores } from '../pages/module1/Valores';
import { PropuestaValor } from '../pages/module1/PropuestaValor';
import { Organigrama } from '../pages/module1/Organigrama';
import { BeneficiosIMN } from '../pages/module1/BeneficiosIMN';
import { QuizEtapa1 } from '../pages/module1/QuizEtapa1';
import { QuizCongratulations } from '../pages/module1/QuizCongratulations';
import { QueHacemosVideo } from '../pages/module1/QueHacemosVideo';
import { ObjetivosEstrategicos } from '../pages/module1/ObjetivosEstrategicos';
import { CoberturaGeografica } from '../pages/module1/CoberturaGeografica';
import { NuestrasMarcas } from '../pages/module1/NuestrasMarcas';
import { ProductosTimeline } from '../pages/module1/ProductosTimeline';
import { QuizModulo1 } from '../pages/module1/QuizModulo1';
import { Modulo1Congratulations } from '../pages/module1/Modulo1Congratulations';

// Module 2
import { SSTIntro } from '../pages/module2/SSTIntro';
import { SSTKnowledgeCheck } from '../pages/module2/SSTKnowledgeCheck';
import { SGSSTDefinition } from '../pages/module2/SGSSTDefinition';
import { CyclePHVA } from '../pages/module2/CyclePHVA';
import { SSTPoliciesObjectives } from '../pages/module2/SSTPoliciesObjectives';
import { SSTRolesResponsibilities } from '../pages/module2/SSTRolesResponsibilities';
import { SSTCommittees } from '../pages/module2/SSTCommittees';
import { SSTConcepts } from '../pages/module2/SSTConcepts';
import { SSTEPP } from '../pages/module2/SSTEPP';
import { SSTAccidentFlow } from '../pages/module2/SSTAccidentFlow';
import { SSTQuiz } from '../pages/module2/SSTQuiz';
import { SSTCongratulations } from '../pages/module2/SSTCongratulations';

// Module 3
import { ProcessPortal } from '../pages/module3/ProcessPortal';
import { ProduccionCalidadIntro } from '../pages/module3/ProduccionCalidadIntro';
import { ProduccionPropositoFunciones } from '../pages/module3/ProduccionPropositoFunciones';
import { ProduccionOrganigrama } from '../pages/module3/ProduccionOrganigrama';
import { ProduccionProcesosClave } from '../pages/module3/ProduccionProcesosClave';
import { ProduccionAreasApoyo } from '../pages/module3/ProduccionAreasApoyo';
import { ProduccionQuiz } from '../pages/module3/ProduccionQuiz';
import { ComercialIntro } from '../pages/module3/ComercialIntro';
import { ComercialPropositoFunciones } from '../pages/module3/ComercialPropositoFunciones';
import { ComercialOrganigrama } from '../pages/module3/ComercialOrganigrama';
import { ComercialProcesosClave } from '../pages/module3/ComercialProcesosClave';
import { ComercialAreasApoyo } from '../pages/module3/ComercialAreasApoyo';
import { ComercialQuiz } from '../pages/module3/ComercialQuiz';
import { LogisticaIntro } from '../pages/module3/LogisticaIntro';
import { LogisticaPropositoFunciones } from '../pages/module3/LogisticaPropositoFunciones';
import { LogisticaOrganigrama } from '../pages/module3/LogisticaOrganigrama';
import { LogisticaProcesosClave } from '../pages/module3/LogisticaProcesosClave';
import { LogisticaAreasApoyo } from '../pages/module3/LogisticaAreasApoyo';
import { LogisticaQuiz } from '../pages/module3/LogisticaQuiz';

// Module 4
import { SupportAreasPortal } from '../pages/module4/SupportAreasPortal';
import { ContabilidadIntro } from '../pages/module4/ContabilidadIntro';
import { ContabilidadPropositoFunciones } from '../pages/module4/ContabilidadPropositoFunciones';
import { ContabilidadOrganigrama } from '../pages/module4/ContabilidadOrganigrama';
import { ContabilidadProcesosClave } from '../pages/module4/ContabilidadProcesosClave';
import { ContabilidadAreasApoyo } from '../pages/module4/ContabilidadAreasApoyo';
import { ContabilidadQuiz } from '../pages/module4/ContabilidadQuiz';
import { MarketingIntro } from '../pages/module4/MarketingIntro';
import { MarketingPropositoFunciones } from '../pages/module4/MarketingPropositoFunciones';
import { MarketingOrganigrama } from '../pages/module4/MarketingOrganigrama';
import { MarketingProcesosClave } from '../pages/module4/MarketingProcesosClave';
import { MarketingAreasApoyo } from '../pages/module4/MarketingAreasApoyo';
import { MarketingQuiz } from '../pages/module4/MarketingQuiz';
import { ArgipIntro } from '../pages/module4/ArgipIntro';
import { ArgipPropositoFunciones } from '../pages/module4/ArgipPropositoFunciones';
import { ArgipOrganigrama } from '../pages/module4/ArgipOrganigrama';
import { ArgipProcesosClave } from '../pages/module4/ArgipProcesosClave';
import { ArgipAreasApoyo } from '../pages/module4/ArgipAreasApoyo';
import { ArgipQuiz } from '../pages/module4/ArgipQuiz';

// Layout & guards
import { StageWrapper } from '../components/StageWrapper';
import { useAuth } from '../context/AuthContext';
import { useProgress } from '../context/ProgressContext';
import { ModuleRepositoryImpl } from '../../data/repositories/ModuleRepositoryImpl';
import { useNavigate } from 'react-router-dom';

// Wrapper to provide `useNavigate` to page components via onBack/onNext props
const NavigablePage: React.FC<{
  component: React.ComponentType<any>;
  props?: Record<string, any>;
  back?: string;
  next?: string;
}> = ({ component: Component, props = {}, back, next }) => {
  const navigate = useNavigate();
  return (
    <Component
      {...props}
      {...(back !== undefined ? { onBack: () => navigate(back) } : {})}
      {...(next !== undefined ? { onNext: () => navigate(next) } : {})}
    />
  );
};

// Auth guard
const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export const AppRoutes: React.FC = () => {
  const { login, logout } = useAuth();
  const navigate = useNavigate();
  const progress = useProgress();

  return (
    <StageWrapper>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage onLogin={(u) => { login(u); navigate('/'); }} />} />

        {/* Dashboard */}
        <Route path="/" element={
          <RequireAuth>
            <TrainingDashboard
              onModuleSelect={(id) => {
                if (id === 1) navigate('/m1/corporativo');
                else if (id === 2) navigate('/m2/intro');
                else if (id === 3) navigate('/m3/portal');
                else if (id === 4) navigate('/m4/portal');
              }}
              onLogout={() => { logout(); navigate('/login'); }}
            />
          </RequireAuth>
        } />

        {/* ═══════════ MODULE 1 ═══════════ */}
        <Route path="/m1/corporativo" element={
          <RequireAuth>
            <CorporativoPage
              initialStage={1}
              onBack={() => navigate('/')}
              onNavigateTo={(view: string) => {
                const viewMap: Record<string, string> = {
                  'key-moments': '/m1/key-moments',
                  'quienes-somos': '/m1/quienes-somos',
                  'que-hacemos-video': '/m1/que-hacemos/video',
                };
                navigate(viewMap[view] || '/');
              }}
              queHacemosUnlocked={progress.queHacemosUnlocked}
            />
          </RequireAuth>
        } />
        <Route path="/m1/corporativo-unlocked" element={
          <RequireAuth>
            <CorporativoPage
              initialStage={2}
              onBack={() => navigate('/')}
              onNavigateTo={(view: string) => {
                const viewMap: Record<string, string> = {
                  'key-moments': '/m1/key-moments',
                  'quienes-somos': '/m1/quienes-somos',
                  'que-hacemos-video': '/m1/que-hacemos/video',
                };
                navigate(viewMap[view] || '/');
              }}
              queHacemosUnlocked={progress.queHacemosUnlocked}
            />
          </RequireAuth>
        } />
        <Route path="/m1/key-moments" element={<RequireAuth><KeyMomentsTimeline onBack={() => navigate('/m1/corporativo')} onComplete={() => navigate('/m1/brand-evolution')} /></RequireAuth>} />
        <Route path="/m1/brand-evolution" element={<RequireAuth><BrandEvolutionTimeline onBack={() => navigate('/m1/corporativo-unlocked')} onComplete={() => navigate('/m1/quienes-somos')} /></RequireAuth>} />
        <Route path="/m1/quienes-somos" element={<RequireAuth><NavigablePage component={QuienesSomos} back="/m1/corporativo-unlocked" next="/m1/filosofia" /></RequireAuth>} />
        <Route path="/m1/filosofia" element={<RequireAuth><NavigablePage component={NuestraFilosofia} back="/m1/quienes-somos" next="/m1/mision" /></RequireAuth>} />
        <Route path="/m1/mision" element={<RequireAuth><NavigablePage component={Mision} back="/m1/filosofia" next="/m1/vision" /></RequireAuth>} />
        <Route path="/m1/vision" element={<RequireAuth><NavigablePage component={Vision} back="/m1/mision" next="/m1/valores" /></RequireAuth>} />
        <Route path="/m1/valores" element={<RequireAuth><NavigablePage component={Valores} back="/m1/vision" next="/m1/propuesta" /></RequireAuth>} />
        <Route path="/m1/propuesta" element={<RequireAuth><NavigablePage component={PropuestaValor} back="/m1/valores" next="/m1/organigrama" /></RequireAuth>} />
        <Route path="/m1/organigrama" element={<RequireAuth><NavigablePage component={Organigrama} back="/m1/propuesta" next="/m1/beneficios" /></RequireAuth>} />
        <Route path="/m1/beneficios" element={<RequireAuth><NavigablePage component={BeneficiosIMN} back="/m1/organigrama" next="/m1/quiz-etapa1" /></RequireAuth>} />
        <Route path="/m1/quiz-etapa1" element={
          <RequireAuth>
            <QuizEtapa1
              onBack={() => navigate('/m1/beneficios')}
              onComplete={() => navigate('/m1/quiz-congrats')}
            />
          </RequireAuth>
        } />
        <Route path="/m1/quiz-congrats" element={
          <RequireAuth>
            <QuizCongratulations onReturn={() => {
              progress.setQueHacemosUnlocked(true);
              navigate('/m1/corporativo-unlocked');
            }} />
          </RequireAuth>
        } />
        <Route path="/m1/que-hacemos/video" element={<RequireAuth><NavigablePage component={QueHacemosVideo} back="/m1/corporativo-unlocked" next="/m1/que-hacemos/objetivos" /></RequireAuth>} />
        <Route path="/m1/que-hacemos/objetivos" element={<RequireAuth><NavigablePage component={ObjetivosEstrategicos} back="/m1/que-hacemos/video" next="/m1/que-hacemos/cobertura" /></RequireAuth>} />
        <Route path="/m1/que-hacemos/cobertura" element={<RequireAuth><NavigablePage component={CoberturaGeografica} back="/m1/que-hacemos/objetivos" next="/m1/que-hacemos/marcas" /></RequireAuth>} />
        <Route path="/m1/que-hacemos/marcas" element={<RequireAuth><NavigablePage component={NuestrasMarcas} back="/m1/que-hacemos/cobertura" next="/m1/que-hacemos/productos" /></RequireAuth>} />
        <Route path="/m1/que-hacemos/productos" element={
          <RequireAuth>
            <ProductosTimeline
              onBack={() => navigate('/m1/que-hacemos/marcas')}
              onNext={() => navigate('/m1/quiz-final')}
            />
          </RequireAuth>
        } />
        <Route path="/m1/quiz-final" element={
          <RequireAuth>
            <QuizModulo1
              onBack={() => navigate('/m1/que-hacemos/productos')}
              onComplete={() => navigate('/m1/congratulations')}
            />
          </RequireAuth>
        } />
        <Route path="/m1/congratulations" element={
          <RequireAuth>
            <Modulo1Congratulations onReturn={async () => {
              progress.setQueHacemosUnlocked(true);
              const repository = ModuleRepositoryImpl.getInstance();
              await repository.completeModule(1);
              navigate('/');
            }} />
          </RequireAuth>
        } />

        {/* ═══════════ MODULE 2 (SST) ═══════════ */}
        <Route path="/m2/intro" element={<RequireAuth><SSTIntro onBack={() => navigate('/')} onStart={() => navigate('/m2/knowledge-check')} /></RequireAuth>} />
        <Route path="/m2/knowledge-check" element={<RequireAuth><SSTKnowledgeCheck onNext={() => navigate('/m2/definition')} onBack={() => navigate('/m2/intro')} /></RequireAuth>} />
        <Route path="/m2/definition" element={<RequireAuth><SGSSTDefinition onNext={() => navigate('/m2/phva')} /></RequireAuth>} />
        <Route path="/m2/phva" element={<RequireAuth><CyclePHVA onNext={() => navigate('/m2/policies')} /></RequireAuth>} />
        <Route path="/m2/policies" element={<RequireAuth><SSTPoliciesObjectives onNext={() => navigate('/m2/roles')} /></RequireAuth>} />
        <Route path="/m2/roles" element={<RequireAuth><SSTRolesResponsibilities onNext={() => navigate('/m2/committees')} /></RequireAuth>} />
        <Route path="/m2/committees" element={<RequireAuth><SSTCommittees onNext={() => navigate('/m2/concepts')} /></RequireAuth>} />
        <Route path="/m2/concepts" element={<RequireAuth><SSTConcepts onNext={() => navigate('/m2/epp')} /></RequireAuth>} />
        <Route path="/m2/epp" element={<RequireAuth><SSTEPP onNext={() => navigate('/m2/accident-flow')} /></RequireAuth>} />
        <Route path="/m2/accident-flow" element={<RequireAuth><SSTAccidentFlow onNext={() => navigate('/m2/quiz')} /></RequireAuth>} />
        <Route path="/m2/quiz" element={
          <RequireAuth>
            <SSTQuiz onFinish={() => {
              progress.setModulo3Unlocked(true);
              navigate('/m2/congratulations');
            }} />
          </RequireAuth>
        } />
        <Route path="/m2/congratulations" element={<RequireAuth><SSTCongratulations onFinish={() => navigate('/')} /></RequireAuth>} />

        {/* ═══════════ MODULE 3 (Proceso) ═══════════ */}
        <Route path="/m3/portal" element={
          <RequireAuth>
            <ProcessPortal
              onBack={async () => {
                if (progress.completedProcessModules.length === 3) {
                  const repository = ModuleRepositoryImpl.getInstance();
                  await repository.completeModule(3);
                }
                navigate('/');
              }}
              onModuleSelect={(id) => {
                if (id === 1) navigate('/m3/produccion/intro');
                else if (id === 2) navigate('/m3/comercial/intro');
                else if (id === 3) navigate('/m3/logistica/intro');
              }}
              completedModules={progress.completedProcessModules}
            />
          </RequireAuth>
        } />
        {/* Producción */}
        <Route path="/m3/produccion/intro" element={<RequireAuth><ProduccionCalidadIntro onBack={() => navigate('/m3/portal')} onStart={() => navigate('/m3/produccion/proposito')} /></RequireAuth>} />
        <Route path="/m3/produccion/proposito" element={<RequireAuth><NavigablePage component={ProduccionPropositoFunciones} back="/m3/produccion/intro" next="/m3/produccion/organigrama" /></RequireAuth>} />
        <Route path="/m3/produccion/organigrama" element={<RequireAuth><NavigablePage component={ProduccionOrganigrama} back="/m3/produccion/proposito" next="/m3/produccion/procesos" /></RequireAuth>} />
        <Route path="/m3/produccion/procesos" element={<RequireAuth><NavigablePage component={ProduccionProcesosClave} back="/m3/produccion/organigrama" next="/m3/produccion/areas" /></RequireAuth>} />
        <Route path="/m3/produccion/areas" element={<RequireAuth><NavigablePage component={ProduccionAreasApoyo} back="/m3/produccion/procesos" next="/m3/produccion/quiz" /></RequireAuth>} />
        <Route path="/m3/produccion/quiz" element={
          <RequireAuth>
            <ProduccionQuiz
              onBack={() => navigate('/m3/produccion/areas')}
              onComplete={() => { progress.addCompletedProcessModule(1); navigate('/m3/portal'); }}
            />
          </RequireAuth>
        } />
        {/* Comercial */}
        <Route path="/m3/comercial/intro" element={<RequireAuth><ComercialIntro onBack={() => navigate('/m3/portal')} onNext={() => navigate('/m3/comercial/proposito')} /></RequireAuth>} />
        <Route path="/m3/comercial/proposito" element={<RequireAuth><NavigablePage component={ComercialPropositoFunciones} back="/m3/comercial/intro" next="/m3/comercial/organigrama" /></RequireAuth>} />
        <Route path="/m3/comercial/organigrama" element={<RequireAuth><NavigablePage component={ComercialOrganigrama} back="/m3/comercial/proposito" next="/m3/comercial/procesos" /></RequireAuth>} />
        <Route path="/m3/comercial/procesos" element={<RequireAuth><NavigablePage component={ComercialProcesosClave} back="/m3/comercial/organigrama" next="/m3/comercial/areas" /></RequireAuth>} />
        <Route path="/m3/comercial/areas" element={<RequireAuth><NavigablePage component={ComercialAreasApoyo} back="/m3/comercial/procesos" next="/m3/comercial/quiz" /></RequireAuth>} />
        <Route path="/m3/comercial/quiz" element={
          <RequireAuth>
            <ComercialQuiz
              onBack={() => navigate('/m3/comercial/areas')}
              onComplete={() => { progress.addCompletedProcessModule(2); navigate('/m3/portal'); }}
            />
          </RequireAuth>
        } />
        {/* Logística */}
        <Route path="/m3/logistica/intro" element={<RequireAuth><LogisticaIntro onBack={() => navigate('/m3/portal')} onNext={() => navigate('/m3/logistica/proposito')} /></RequireAuth>} />
        <Route path="/m3/logistica/proposito" element={<RequireAuth><NavigablePage component={LogisticaPropositoFunciones} back="/m3/logistica/intro" next="/m3/logistica/organigrama" /></RequireAuth>} />
        <Route path="/m3/logistica/organigrama" element={<RequireAuth><NavigablePage component={LogisticaOrganigrama} back="/m3/logistica/proposito" next="/m3/logistica/procesos" /></RequireAuth>} />
        <Route path="/m3/logistica/procesos" element={<RequireAuth><NavigablePage component={LogisticaProcesosClave} back="/m3/logistica/organigrama" next="/m3/logistica/areas" /></RequireAuth>} />
        <Route path="/m3/logistica/areas" element={<RequireAuth><NavigablePage component={LogisticaAreasApoyo} back="/m3/logistica/procesos" next="/m3/logistica/quiz" /></RequireAuth>} />
        <Route path="/m3/logistica/quiz" element={
          <RequireAuth>
            <LogisticaQuiz
              onBack={() => navigate('/m3/logistica/areas')}
              onComplete={() => { progress.addCompletedProcessModule(3); navigate('/m3/portal'); }}
            />
          </RequireAuth>
        } />

        {/* ═══════════ MODULE 4 (Áreas de Apoyo) ═══════════ */}
        <Route path="/m4/portal" element={
          <RequireAuth>
            <SupportAreasPortal
              onBack={async () => {
                if (progress.completedSupportModules.length === 3) {
                  const repository = ModuleRepositoryImpl.getInstance();
                  await repository.completeModule(4);
                }
                navigate('/');
              }}
              onModuleSelect={(id) => {
                if (id === 1) navigate('/m4/contabilidad/intro');
                else if (id === 2) navigate('/m4/marketing/intro');
                else if (id === 3) navigate('/m4/argip/intro');
              }}
              completedModules={progress.completedSupportModules}
            />
          </RequireAuth>
        } />
        {/* Contabilidad */}
        <Route path="/m4/contabilidad/intro" element={<RequireAuth><ContabilidadIntro onBack={() => navigate('/m4/portal')} onStart={() => navigate('/m4/contabilidad/proposito')} /></RequireAuth>} />
        <Route path="/m4/contabilidad/proposito" element={<RequireAuth><NavigablePage component={ContabilidadPropositoFunciones} back="/m4/contabilidad/intro" next="/m4/contabilidad/organigrama" /></RequireAuth>} />
        <Route path="/m4/contabilidad/organigrama" element={<RequireAuth><NavigablePage component={ContabilidadOrganigrama} back="/m4/contabilidad/proposito" next="/m4/contabilidad/procesos" /></RequireAuth>} />
        <Route path="/m4/contabilidad/procesos" element={<RequireAuth><NavigablePage component={ContabilidadProcesosClave} back="/m4/contabilidad/organigrama" next="/m4/contabilidad/areas" /></RequireAuth>} />
        <Route path="/m4/contabilidad/areas" element={<RequireAuth><NavigablePage component={ContabilidadAreasApoyo} back="/m4/contabilidad/procesos" next="/m4/contabilidad/quiz" /></RequireAuth>} />
        <Route path="/m4/contabilidad/quiz" element={
          <RequireAuth>
            <ContabilidadQuiz
              onBack={() => navigate('/m4/contabilidad/areas')}
              onComplete={() => { progress.addCompletedSupportModule(1); navigate('/m4/portal'); }}
            />
          </RequireAuth>
        } />
        {/* Marketing */}
        <Route path="/m4/marketing/intro" element={<RequireAuth><MarketingIntro onBack={() => navigate('/m4/portal')} onStart={() => navigate('/m4/marketing/proposito')} /></RequireAuth>} />
        <Route path="/m4/marketing/proposito" element={<RequireAuth><NavigablePage component={MarketingPropositoFunciones} back="/m4/marketing/intro" next="/m4/marketing/organigrama" /></RequireAuth>} />
        <Route path="/m4/marketing/organigrama" element={<RequireAuth><NavigablePage component={MarketingOrganigrama} back="/m4/marketing/proposito" next="/m4/marketing/procesos" /></RequireAuth>} />
        <Route path="/m4/marketing/procesos" element={<RequireAuth><NavigablePage component={MarketingProcesosClave} back="/m4/marketing/organigrama" next="/m4/marketing/areas" /></RequireAuth>} />
        <Route path="/m4/marketing/areas" element={<RequireAuth><NavigablePage component={MarketingAreasApoyo} back="/m4/marketing/procesos" next="/m4/marketing/quiz" /></RequireAuth>} />
        <Route path="/m4/marketing/quiz" element={
          <RequireAuth>
            <MarketingQuiz
              onBack={() => navigate('/m4/marketing/areas')}
              onComplete={() => { progress.addCompletedSupportModule(2); navigate('/m4/portal'); }}
            />
          </RequireAuth>
        } />
        {/* ARGIP */}
        <Route path="/m4/argip/intro" element={<RequireAuth><ArgipIntro onBack={() => navigate('/m4/portal')} onStart={() => navigate('/m4/argip/proposito')} /></RequireAuth>} />
        <Route path="/m4/argip/proposito" element={<RequireAuth><NavigablePage component={ArgipPropositoFunciones} back="/m4/argip/intro" next="/m4/argip/organigrama" /></RequireAuth>} />
        <Route path="/m4/argip/organigrama" element={<RequireAuth><NavigablePage component={ArgipOrganigrama} back="/m4/argip/proposito" next="/m4/argip/procesos" /></RequireAuth>} />
        <Route path="/m4/argip/procesos" element={<RequireAuth><NavigablePage component={ArgipProcesosClave} back="/m4/argip/organigrama" next="/m4/argip/areas" /></RequireAuth>} />
        <Route path="/m4/argip/areas" element={<RequireAuth><NavigablePage component={ArgipAreasApoyo} back="/m4/argip/procesos" next="/m4/argip/quiz" /></RequireAuth>} />
        <Route path="/m4/argip/quiz" element={
          <RequireAuth>
            <ArgipQuiz
              onBack={() => navigate('/m4/argip/areas')}
              onComplete={() => { progress.addCompletedSupportModule(3); navigate('/m4/portal'); }}
            />
          </RequireAuth>
        } />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </StageWrapper>
  );
};
