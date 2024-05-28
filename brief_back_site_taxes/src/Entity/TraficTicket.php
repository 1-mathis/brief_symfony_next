<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\TraficTicketRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TraficTicketRepository::class)]
#[ApiResource()]
class TraficTicket
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 16)]
    private ?string $card_number = null;

    #[ORM\Column(length: 3)]
    private ?string $cryptogram = null;

    #[ORM\Column(type: Types::DATE_IMMUTABLE)]
    private ?\DateTimeImmutable $expiration_card = null;

    #[ORM\Column(length: 255)]
    private ?string $number_trafic_ticket = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $updated_at = null;

    #[ORM\ManyToOne(inversedBy: 'trafic_ticket')]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCardNumber(): ?string
    {
        return $this->card_number;
    }

    public function setCardNumber(string $card_number): static
    {
        $this->card_number = $card_number;

        return $this;
    }

    public function getCryptogram(): ?string
    {
        return $this->cryptogram;
    }

    public function setCryptogram(string $cryptogram): static
    {
        $this->cryptogram = $cryptogram;

        return $this;
    }

    public function getExpirationCard(): ?\DateTimeImmutable
    {
        return $this->expiration_card;
    }

    public function setExpirationCard(\DateTimeImmutable $expiration_card): static
    {
        $this->expiration_card = $expiration_card;

        return $this;
    }

    public function getNumberTraficTicket(): ?string
    {
        return $this->number_trafic_ticket;
    }

    public function setNumberTraficTicket(string $number_trafic_ticket): static
    {
        $this->number_trafic_ticket = $number_trafic_ticket;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): static
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updated_at;
    }

    public function setUpdatedAt(\DateTimeImmutable $updated_at): static
    {
        $this->updated_at = $updated_at;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }
}
