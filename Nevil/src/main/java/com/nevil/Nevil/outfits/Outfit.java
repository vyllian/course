package com.nevil.Nevil.outfits;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "Outfits")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Outfit {
    @Id
    private ObjectId id;
    private String date;
    private String season;
    private String style;
    private String mood;
    private ArrayList<String> colors;
    private int likes;
    private String image;

    public void setLikes(int likes) {
        this.likes = likes;
    }
}


