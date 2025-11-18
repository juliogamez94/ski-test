using MongoSki.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Threading.Tasks;

namespace MongoSki.Services
{
    public class MongoDBServices
    {
        private readonly IMongoCollection<Resort> _skiCollection;
        private readonly IMongoClient _mongoClient;
        private readonly IMongoDatabase _mongoDatabase;

        public MongoDBServices(IOptions<MongoDBSettings> mongoDBSettings)
        {
             _mongoClient = new MongoClient(mongoDBSettings.Value.ConnectionURI);
             _mongoDatabase = _mongoClient.GetDatabase(mongoDBSettings.Value.DatabaseName);
            _skiCollection = _mongoDatabase.GetCollection<Resort>(mongoDBSettings.Value.CollectionName);
        }

        public async Task<List<Resort>> GetAsync() {
          return await _skiCollection.Find(new BsonDocument()).ToListAsync();
        }

        public async Task<Resort?> GetBySlugAsync(string slug) {
            var filter = Builders<Resort>.Filter.Eq(r => r.Slug, slug);
            return await _skiCollection.Find(filter).FirstOrDefaultAsync();
        }

        public async Task CreateAsync(Resort newResort) {
            await _skiCollection.InsertOneAsync(newResort);
        }

        public async Task<Dictionary<string, long>> GetCollectionsCountAsync()
        {
            var names = await _mongoDatabase.ListCollectionNames().ToListAsync();
            var result = new Dictionary<string, long>();
            foreach (var name in names)
            {
                var coll = _mongoDatabase.GetCollection<BsonDocument>(name);
                var count = await coll.CountDocumentsAsync(new BsonDocument());
                result[name] = count;
            }
            return result;
        }

        public async Task AddToResort(string id, string resortId){
            FilterDefinition<Resort> filter = Builders<Resort>.Filter.Eq(r => r.Id, id);
            UpdateDefinition<Resort> update = Builders<Resort>.Update.Push(r => r.ResortId, resortId);
            await _skiCollection.UpdateOneAsync(filter, update);
        }

    }
}