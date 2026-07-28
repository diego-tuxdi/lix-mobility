import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navigation";
import { Container, Section, ScrollReveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de la plataforma LIX Mobility.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-surface-soft pt-32 sm:pt-40 pb-12 border-b border-line">
          <Container>
            <ScrollReveal delay={100}>
              <h1 className="text-balance text-4xl font-semibold tracking-[-.04em] text-ink-deep sm:text-5xl lg:text-6xl">
                Política de Privacidad
              </h1>
              <p className="mt-4 text-sm text-muted">Última actualización: 16 de Julio de 2026</p>
            </ScrollReveal>
          </Container>
        </section>

        <Section>
          <Container className="max-w-[800px] text-left">
            <ScrollReveal delay={200} className="prose prose-slate leading-8 text-muted space-y-8">
              <p>
                En LIX Mobility, valoramos tu privacidad y nos comprometemos a proteger la información personal que compartís con nosotros. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos tus datos cuando accedés a nuestro sitio web o utilizás nuestra aplicación móvil.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">1. Información que Recopilamos</h2>
                <p>
                  Recopilamos información indispensable para brindar y mejorar el servicio de movilidad acuática, que incluye:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong>Datos de registro:</strong> Nombre, dirección de correo electrónico, número de teléfono y contraseña.</li>
                  <li><strong>Información del perfil del capitán:</strong> Licencia de conductor náutico, datos de la embarcación, matrícula e información fiscal.</li>
                  <li><strong>Datos de pago:</strong> Información necesaria para procesar cobros y transferencias de dinero de manera segura.</li>
                  <li><strong>Comunicaciones:</strong> Mensajes y comentarios enviados a través del soporte de atención al cliente.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">2. Geolocalización en Tiempo Real</h2>
                <p>
                  Para habilitar la asignación de viajes y el seguimiento del recorrido por seguridad de ambas partes, LIX recopila datos de ubicación exacta de tu dispositivo móvil. En el caso de los capitanes, la geolocalización puede ejecutarse en segundo plano mientras la aplicación esté activa y en modo de trabajo. Podés desactivar el permiso de geolocalización en los ajustes de tu dispositivo, pero esto inhabilitará la capacidad de solicitar o aceptar viajes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">3. Uso de la Información</h2>
                <p>
                  Utilizamos tus datos personales únicamente para los siguientes fines:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Conectar eficientemente a pasajeros y capitanes.</li>
                  <li>Procesar cobros, pagos y transferencias bancarias de forma segura.</li>
                  <li>Brindar soporte técnico y resolver reclamos o disputas.</li>
                  <li>Enviar notificaciones operativas relevantes sobre tus viajes.</li>
                  <li>Mejorar el desempeño y la seguridad general de la plataforma.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">4. Seguridad y Retención de Datos</h2>
                <p>
                  Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado, pérdida, alteración o divulgación. Conservamos tus datos únicamente durante el tiempo necesario para cumplir con los propósitos para los cuales fueron recolectados y para cumplir con requerimientos legales o impositivos vigentes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">5. Uso Compartido de la Información con Terceros</h2>
                <p>
                  No vendemos ni alquilamos tus datos personales. Compartimos información únicamente con:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Proveedores de servicios tecnológicos integrados (por ejemplo, pasarelas de pago y servicios de cartografía).</li>
                  <li>Autoridades regulatorias o de seguridad en caso de ser requerido legalmente o ante situaciones de emergencia fluvial.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-ink-deep mb-3">6. Tus Derechos y Opciones</h2>
                <p>
                  Tenés derecho a acceder, rectificar, limitar el uso o solicitar la eliminación definitiva de tu información y tu cuenta de usuario enviando una solicitud formal a nuestro canal de soporte técnico. Responderemos a tu solicitud de acuerdo con los plazos legales establecidos.
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
