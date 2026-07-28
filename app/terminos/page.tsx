import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navigation";
import { Container, Section, ScrollReveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de Uso de la plataforma LIX Mobility.",
  alternates: { canonical: "/terminos" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-surface-soft pt-32 sm:pt-40 pb-12 border-b border-line">
          <Container>
            <ScrollReveal delay={100}>
              <h1 className="text-balance text-4xl font-semibold tracking-[-.04em] text-ink-deep sm:text-5xl lg:text-6xl">
                Términos y Condiciones
              </h1>
              <p className="mt-4 text-sm text-muted">Última actualización: 16 de Julio de 2026</p>
            </ScrollReveal>
          </Container>
        </section>

        <Section>
          <Container className="max-w-[800px] text-left">
            <ScrollReveal delay={200} className="prose prose-slate leading-8 text-muted space-y-8">
              <p>
                Bienvenido a LIX Mobility. Al utilizar nuestro sitio web y nuestra aplicación móvil, aceptás cumplir y estar sujeto a los siguientes términos y condiciones de servicio. Por favor, leelos detenidamente antes de utilizar la plataforma.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">1. Aceptación de los Términos</h2>
                <p>
                  Al acceder y registrarte en LIX Mobility, ya sea como pasajero o como capitán, declarás que tenés la capacidad legal para aceptar este acuerdo y cumplir con todas sus cláusulas. Si no estás de acuerdo con alguna sección, no debés utilizar la aplicación.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">2. Naturaleza del Servicio</h2>
                <p>
                  LIX Mobility es una plataforma tecnológica que actúa como intermediaria conectando a pasajeros que requieren servicios de transporte fluvial con capitanes de embarcaciones registrados y verificados. LIX no posee embarcaciones ni opera como empresa de transporte fluvial directo. La embarcación y la navegación son de exclusiva responsabilidad del capitán titular.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">3. Registro de Usuarios y Cuentas</h2>
                <p>
                  Para operar en LIX, es requisito crear una cuenta personal facilitando datos exactos y actualizados. Sos responsable de resguardar tus credenciales de acceso. LIX se reserva el derecho de suspender o inhabilitar cuentas que violen las normativas vigentes o den un uso fraudulento a la plataforma.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">4. Tarifas y Medios de Pago</h2>
                <p>
                  Las tarifas de los viajes son calculadas de forma dinámica a través de la aplicación en base al origen, destino y demanda en tiempo real. Los métodos de pago aceptados figuran disponibles en la aplicación y se gestionan a través de proveedores de pagos autorizados. Las tarifas se muestran transparentemente antes de solicitar el viaje.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">5. Política de Cancelación</h2>
                <p>
                  Los pasajeros y capitanes pueden cancelar viajes solicitados sujetos a las políticas informadas en la aplicación. Dependiendo del momento de la cancelación, pueden aplicar cargos por compensación de tiempo y combustible, los cuales se notificarán de forma inmediata.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">6. Responsabilidad Náutica</h2>
                <p>
                  Cada capitán registrado en LIX opera de manera independiente y certifica contar con habilitación náutica oficial vigente emitida por la Prefectura Naval Argentina. La seguridad de la navegación, el estado técnico de la embarcación y el cumplimiento de las normativas de navegación son responsabilidad única y exclusiva del capitán a cargo.
                </p>
              </div>
 
              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">7. Modificaciones en el Servicio</h2>
                <p>
                  LIX Mobility se reserva el derecho de modificar o actualizar estos términos en cualquier momento. El uso continuado de la plataforma con posterioridad a dichas actualizaciones implica la aceptación tácita de los nuevos términos y condiciones de uso.
                </p>
              </div>
            </ScrollReveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
