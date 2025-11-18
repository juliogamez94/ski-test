using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace MongoSki.Models;

public class Resort
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("slug")]
    public string Slug { get; set; } = null!;

    [BsonElement("name")]
    public string Name { get; set; } = null!;

    [BsonElement("country")]
    public string Country { get; set; } = null!;

    [BsonElement("state")]
    public string State { get; set; } = null!;

    [BsonElement("blurb")]
    public string Blurb { get; set; } = null!;

    [BsonElement("hero")]
    public string Hero { get; set; } = null!;

    [BsonElement("stats")]
    public ResortStats Stats { get; set; } = null!;

    [BsonElement("monthlySnowfall")]
    public List<int> MonthlySnowfall { get; set; } = null!;

    [BsonElement("reasons")]
    public List<string> Reasons { get; set; } = null!;

    // Legacy fields for backward compatibility
    [BsonElement("title")]
    public string? Title { get; set; }

    [BsonElement("location")]
    public string? Location { get; set; }

    [BsonElement("price")]
    public string? Price { get; set; }

    [BsonElement("image")]
    public string? Image { get; set; }

    [BsonElement("items")]
    [JsonPropertyName("items")]
    public List<string>? ResortId { get; set; }
}

public class ResortStats
{
    [BsonElement("lifts")]
    public int Lifts { get; set; }

    [BsonElement("runs")]
    public int Runs { get; set; }

    [BsonElement("baseElevation")]
    public int BaseElevation { get; set; }

    [BsonElement("avgSnowfall")]
    public int AvgSnowfall { get; set; }

    [BsonElement("avgTicketPrice")]
    public int AvgTicketPrice { get; set; }
}