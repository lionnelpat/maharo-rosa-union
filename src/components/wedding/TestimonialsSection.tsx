import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Heart, Quote, Users, Sparkles} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Blessing {
    id: string;
    name: string;
    relationship: string;
    message: string;
    created_at: string;
}

const TestimonialsSection = () => {
    const [blessings, setBlessings] = useState<Blessing[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedBlessing, setSelectedBlessing] = useState<Blessing | null>(null);

    useEffect(() => {
        const fetchBlessings = async () => {
            const { data, error } = await supabase
                .from('blessings')
                .select('*')
                .order('created_at', { ascending: false });

            if (!error && data) {
                setBlessings(data);
            }
            setIsLoading(false);
        };

        fetchBlessings();

        const channel = supabase
            .channel('blessings-changes')
            .on(
                'postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'blessings',
                },
                (payload) => {
                    setBlessings((prev) => [payload.new as Blessing, ...prev]);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, []);

    const getRelationshipIcon = (relationship: string) => {
        switch (relationship) {
            case 'Famille':
                return <Users className="w-4 h-4" />;
            case 'Frère/Sœur en Christ':
                return <Sparkles className="w-4 h-4" />;
            default:
                return <Heart className="w-4 h-4" />;
        }
    };

    if (isLoading) {
        return (
            <section className="py-20 md:py-32 bg-background">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                    </div>
                </div>
            </section>
        );
    }

    if (blessings.length === 0) {
        return null;
    }

    return (
        <section
            id="temoignages"
            className="relative py-20 md:py-32 bg-background overflow-hidden"
        >
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gold/5 blur-3xl" />
            <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-bordeaux/5 blur-3xl" />

            <div className="relative z-10 container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold-bright font-body text-sm tracking-widest uppercase mb-4">
            Témoignages
          </span>
                    <h2 className="heading-section text-foreground mb-4">
                        Bénédictions & <span className="text-gold-gradient">Vœux</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Les messages d'amour et de prières de nos proches
                    </p>
                    <div className="divider-ornament max-w-xs mx-auto mt-4">
                        <Quote className="w-5 h-5 text-gold fill-gold/30" />
                    </div>
                </motion.div>

                {/* Testimonials Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-5xl mx-auto"
                >
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {blessings.map((blessing) => (
                                <CarouselItem
                                    key={blessing.id}
                                    className="pl-4 md:basis-1/2 lg:basis-1/3"
                                >
                                    <div className="card-wedding h-full flex flex-col p-6 hover:shadow-lg transition-all duration-300">
                                        {/* Quote Icon */}
                                        <div className="mb-4">
                                            <Quote className="w-8 h-8 text-gold/40" />
                                        </div>

                                        {/* Message */}
                                        <div className="flex-grow mb-6">
                                            <p className="text-foreground/90 font-body leading-relaxed italic line-clamp-4">
                                                "{blessing.message}"
                                            </p>
                                            {blessing.message.length > 150 && (
                                                <button
                                                    onClick={() => setSelectedBlessing(blessing)}
                                                    className="text-gold hover:text-gold-bright text-sm mt-2 font-medium transition-colors"
                                                >
                                                    Voir plus →
                                                </button>
                                            )}
                                        </div>

                                        {/* Author */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                            <div
                                                className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-bordeaux/20 flex items-center justify-center">
                        <span className="font-heading text-lg text-gold">
                          {blessing.name.charAt(0).toUpperCase()}
                        </span>
                                            </div>
                                            <div>
                                            <h4 className="font-heading text-foreground">
                                                    {blessing.name}
                                                </h4>
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    {getRelationshipIcon(blessing.relationship)}
                                                    <span>{blessing.relationship}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-2 md:-left-12 border-gold/30 text-gold hover:bg-gold/10 hover:text-gold-bright" />
                        <CarouselNext className="-right-2 md:-right-12 border-gold/30 text-gold hover:bg-gold/10 hover:text-gold-bright" />
                    </Carousel>

                </motion.div>

                {/* Dialog for full message */}
                <Dialog open={!!selectedBlessing} onOpenChange={() => setSelectedBlessing(null)}>
                    <DialogContent className="max-w-lg">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-bordeaux/20 flex items-center justify-center">
                <span className="font-heading text-lg text-gold">
                  {selectedBlessing?.name.charAt(0).toUpperCase()}
                </span>
                                </div>
                                <div>
                                    <span className="font-heading text-foreground">{selectedBlessing?.name}</span>
                                    <div className="flex items-center gap-1 text-sm text-muted-foreground font-normal">
                                        {selectedBlessing && getRelationshipIcon(selectedBlessing.relationship)}
                                        <span>{selectedBlessing?.relationship}</span>
                                    </div>
                                </div>
                            </DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="max-h-[60vh]">
                            <div className="pr-4">
                                <Quote className="w-6 h-6 text-gold/40 mb-2" />
                                <p className="text-foreground/90 font-body leading-relaxed italic">
                                    "{selectedBlessing?.message}"
                                </p>
                            </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default TestimonialsSection;
