"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import MetricCardTen from '@/components/sections/metrics/MetricCardTen';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, Award, Mail } from "lucide-react";

export default function KrasotkaAgencyPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="largeSmall"
      background="circleGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen 
          navItems={[
            {name: "Home", id: "home"},
            {name: "Models", id: "models"},
            {name: "Services", id: "services"},
            {name: "About", id: "about"},
            {name: "Contact", id: "contact"}
          ]}
          brandName="KRASOTKA"
          bottomLeftText="Luxury Models Agency"
          bottomRightText="agency@krasotka.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="KRASOTKA"
          description="Premier luxury models agency connecting exceptional talent with world-class brands and prestigious campaigns"
          buttons={[
            {text: "Discover Models", href: "models"},
            {text: "Partner With Us", href: "contact"}
          ]}
          slides={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/blond-female-long-red-dress-motion-studio-shoot_613910-309.jpg",              imageAlt: "Fashion runway model showcase"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-sexy-model-woman-luxury-lace-evening-dress-posing-carnival-mask_285396-7767.jpg",              imageAlt: "Professional model headshot"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/young-beautiful-smiling-brunette-female-trendy-evening-gold-jacket-sexy-carefree-woman-posing-near-white-wall-studio-circle-lightfashionable-model-with-bright-makeup_158538-22772.jpg",              imageAlt: "Luxury fashion beauty portrait"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          logoLineHeight={1.1}
        />
      </div>

      <div id="models" data-section="models">
        <ProductCardFour
          title="Featured Models"
          description="Our exceptional roster of professional models representing diverse looks, ethnicities, and styles for fashion, commercial, and editorial work"
          tag="Our Talent"
          tagIcon={Sparkles}
          buttons={[
            {text: "View Full Roster", href: "#"},
            {text: "Join Our Agency", href: "#"}
          ]}
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          products={[
            {
              id: "model-1",              name: "Sophia Renaissance",              price: "High-Fashion",              variant: "Fashion, Editorial, Runway",              imageSrc: "https://img.b2bpic.net/free-photo/smiling-portrait-studio-woman_1303-2289.jpg",              imageAlt: "Sophia Renaissance professional headshot"
            },
            {
              id: "model-2",              name: "Isabella Moretti",              price: "Commercial",              variant: "Commercial, Beauty, Lifestyle",              imageSrc: "https://img.b2bpic.net/free-photo/attractive-blond-male-dressed-suit-dark-grey-background_613910-14130.jpg",              imageAlt: "Isabella Moretti portfolio image"
            },
            {
              id: "model-3",              name: "Victoria Hayes",              price: "Plus-Size",              variant: "Plus-Size Fashion, Commercial, Catalog",              imageSrc: "https://img.b2bpic.net/free-photo/portrait-smiley-woman_23-2149022644.jpg",              imageAlt: "Victoria Hayes professional portrait"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Founded in 2015, Krasotka has become Eastern Europe's leading models agency, representing top-tier talent and connecting them with prestigious international brands, fashion houses, and major advertising campaigns"
          useInvertedBackground="noInvert"
          buttons={[
            {text: "Our Story", href: "#"},
            {text: "Contact Us", href: "contact"}
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardSix
          title="Our Services"
          description="Comprehensive agency services tailored to model careers and brand partnerships"
          tag="What We Offer"
          tagIcon={Award}
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          features={[
            {
              id: 1,
              title: "Model Representation",              description: "Full representation and management of professional models across fashion, commercial, editorial, and print segments with strategic career development",              imageSrc: "https://img.b2bpic.net/free-photo/nervous-businessman-quarrelling-coworking-space-having-conflict-workplace-blaming-accuses-bad-work-incompetence-mistakes_482257-5308.jpg"
            },
            {
              id: 2,
              title: "Casting Services",              description: "Expert casting direction for brands, designers, and production companies seeking the perfect talent for their campaigns and projects",              imageSrc: "https://img.b2bpic.net/free-photo/nervous-businessman-quarrelling-coworking-space-having-conflict-workplace-blaming-accuses-bad-work-incompetence-mistakes_482257-5308.jpg"
            },
            {
              id: 3,
              title: "Portfolio Development",              description: "Professional portfolio building, headshot sessions, and digital presence management to showcase model talent effectively",              imageSrc: "https://img.b2bpic.net/free-photo/nervous-businessman-quarrelling-coworking-space-having-conflict-workplace-blaming-accuses-bad-work-incompetence-mistakes_482257-5308.jpg"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Krasotka's professionalism and attention to detail are unmatched. They consistently deliver exceptional talent for our major campaigns and their team is a pleasure to work with."
          rating={5}
          author="Maria Rossi, Creative Director at Luxe Brands"
          avatars={[
            {src: "https://img.b2bpic.net/free-photo/front-view-business-woman-suit_23-2148603018.jpg", alt: "Testimonial avatar 1"},
            {src: "https://img.b2bpic.net/free-photo/front-view-professional-business-woman-suit_23-2148603020.jpg", alt: "Testimonial avatar 2"},
            {src: "https://img.b2bpic.net/free-photo/happy-professional_1098-12931.jpg", alt: "Testimonial avatar 3"},
            {src: "https://img.b2bpic.net/free-photo/content-beautiful-businesswoman-standing-window_1262-1778.jpg", alt: "Testimonial avatar 4"}
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="By The Numbers"
          description="Krasotka's impact and achievements in the modeling industry"
          tag="Our Success"
          textboxLayout="default"
          useInvertedBackground="invertDefault"
          animationType="slide-up"
          metrics={[
            {
              id: "1",              title: "Professional Models",              subtitle: "Representing diverse talent across all categories",              category: "Roster",              value: "150+"
            },
            {
              id: "2",              title: "International Campaigns",              subtitle: "From fashion weeks to global brand partnerships",              category: "Work",              value: "500+"
            },
            {
              id: "3",              title: "Years Industry Leading",              subtitle: "Trusted by top brands since our founding",              category: "Experience",              value: "9"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Join Our Network"
          description="Subscribe to our newsletter for exclusive opportunities, model updates, casting calls, and industry insights"
          useInvertedBackground="noInvert"
          imageSrc="https://img.b2bpic.net/free-vector/gradient-newsletter-template-design_23-2150814950.jpg"
          imageAlt="Newsletter signup illustration"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy and send updates monthly. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="KRASOTKA"
          columns={[
            {
              items: [
                {label: "Models", href: "models"},
                {label: "Services", href: "services"},
                {label: "About", href: "about"}
              ]
            },
            {
              items: [
                {label: "Casting Info", href: "#"},
                {label: "Blog", href: "#"},
                {label: "Opportunities", href: "#"}
              ]
            },
            {
              items: [
                {label: "Contact", href: "contact"},
                {label: "Privacy Policy", href: "#"},
                {label: "Terms", href: "#"}
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}