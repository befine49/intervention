import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

const interventionsMock = [
  {
    id: 1,
    title: "Installation de logiciel",
    technicien: "Ahmed Diop",
    date: "2025-07-20",
    details: "Installation et configuration d’un logiciel antivirus pour le service comptabilité."
  },
  {
    id: 2,
    title: "Remplacement de disque dur",
    technicien: "Fatou Sow",
    date: "2025-07-18",
    details: "Changement d’un disque dur endommagé sur un poste utilisateur."
  }
];

function PreviousInterventions() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">📋 Interventions Terminées</h2>
      {interventionsMock.map((intervention) => (
        <Card className="mb-3 shadow-sm" key={intervention.id}>
          <Card.Body>
            <Card.Title>{intervention.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Technicien : {intervention.technicien} — Date : {intervention.date}
            </Card.Subtitle>
            {expandedId === intervention.id && (
              <Card.Text className="mt-2">{intervention.details}</Card.Text>
            )}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={() => toggleDetails(intervention.id)}
            >
              {expandedId === intervention.id ? "Masquer les détails" : "Voir plus"}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default PreviousInterventions;
