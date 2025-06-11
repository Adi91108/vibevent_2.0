"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Clock,
  MapPin,
  Download,
  TrendingUp,
  Eye,
} from "lucide-react";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Event {
  id: string;
  title: string;
  description: string | null;
  location: string;
  datetime: string;
  owner: {
    name: string;
    email: string;
  };
  rsvps: Array<{
    id: string;
    name: string;
    email: string;
  }>;
  ownerId: string;
}

interface DashboardUser {
  id: string;
  name?: string | null;
  email?: string | null;
  role?: string;
}

interface DashboardContentProps {
  events: Event[];
  user: DashboardUser;
}

export default function DashboardContent({
  events,
  user,
}: DashboardContentProps) {
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  const totalRSVPs = events.reduce(
    (total, event) => total + event.rsvps.length,
    0
  );
  const upcomingEvents = events.filter(
    (event) => new Date(event.datetime) > new Date()
  );

  const handleDeleteEvent = async (eventId: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;

    setLoading(eventId);
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    } finally {
      setLoading(null);
    }
  };

  const exportRSVPs = async (eventId: string, eventTitle: string) => {
    try {
      const response = await fetch(`/api/events/${eventId}/export`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${eventTitle}-rsvps.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error exporting RSVPs:", error);
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8 bg-milk min-h-screen">
      <div className="flex justify-center items-center mb-6 lg:mb-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-orange">
          Dashboard
        </h1>
      </div>
      {/* Events Section */}
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange">
              Your Events
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              Manage and track all your events
            </p>
          </div>
        </div>

        {events.length === 0 ? (
          <Card className="border-slate-200">
            <CardContent className="text-center py-12 sm:py-16 px-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-orange" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-orange mb-2">
                No events yet
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 max-w-md mx-auto">
                Ignite your vision. Your first event is just moments away.
              </p>
              <Button
                className="bg-orange hover:bg-gradient-to-r from-orange to-sunflower text-white shadow-lg w-full sm:w-auto"
                asChild
              >
                <Link href="/dashboard/events/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Your First Event
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:gap-6">
            {events.map((event) => {
              const isUpcoming = new Date(event.datetime) > new Date();
              const eventDate = new Date(event.datetime);

              return (
                <Card
                  key={event.id}
                  className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-slate-300"
                >
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <CardTitle className="text-lg sm:text-xl text-orange break-words">
                            {event.title}
                          </CardTitle>
                          <Badge
                            variant={isUpcoming ? "default" : "secondary"}
                            className={`w-fit ${
                              isUpcoming
                                ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {isUpcoming ? "Upcoming" : "Past"}
                          </Badge>
                        </div>
                        {event.description && (
                          <CardDescription className="text-slate-600 text-sm sm:text-base leading-relaxed break-words">
                            {event.description}
                          </CardDescription>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 sm:ml-4 flex-shrink-0">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-slate-300 text-slate-600 hover:bg-slate-50"
                        >
                          <Link href={`/event/${event.id}`}>
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="border-slate-300 text-slate-600 hover:bg-slate-50"
                        >
                          <Link href={`/dashboard/events/${event.id}/edit`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteEvent(event.id)}
                          disabled={loading === event.id}
                          className="border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start text-slate-600">
                          <Clock className="w-4 h-4 mr-3 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm break-words">
                            {format(
                              eventDate,
                              "EEEE, MMMM d, yyyy 'at' h:mm a"
                            )}
                          </span>
                        </div>
                        <div className="flex items-start text-slate-600">
                          <MapPin className="w-4 h-4 mr-3 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm break-words">
                            {event.location}
                          </span>
                        </div>
                        {user.role === "ADMIN" && (
                          <div className="flex items-start text-slate-600">
                            <Users className="w-4 h-4 mr-3 text-slate-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm break-words">
                              Created by {event.owner.name}
                            </span>
                          </div>
                        )}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex text-center sm:text-left">
                            <div className="text-sm pt-1 mx-2 text-slate-500">
                              RSVPs
                            </div>
                            <div className="text-xl mx-2 sm:text-2xl font-bold text-slate-900">
                              {event.rsvps.length}
                            </div>
                          </div>
                          {event.rsvps.length > 0 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => exportRSVPs(event.id, event.title)}
                              className="border-slate-300 text-slate-600 hover:bg-slate-50 w-full sm:w-auto"
                            >
                              <Download className="w-4 h-4 mr-2" />
                              <span className="sm:hidden">Export</span>
                              <span className="hidden sm:inline">
                                Export CSV
                              </span>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
