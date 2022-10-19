package com.example.testapplication;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.LinearLayout;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class GameActivity extends AppCompatActivity {
    ArrayList<Integer> cards = new ArrayList<Integer>();
    String correct_id;
    int counter = 0;
    AlertDialog.Builder builder;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_game);
        builder = new AlertDialog.Builder(this);
        //List of available Cards


        for (int i=1;i<7;i++){
            int id = getResources().getIdentifier("card" + i, "id", getPackageName());
            Log.v(getClass().getName(), "value = " + id);
            cards.add(id);

        }
        Collections.shuffle(cards);
        correct_id = cards.get(3).toString();
    }

    public void CheckButton(View v){
        //get value of pressed button
        Object button_id = v.getId();
        String hashcode =  button_id.toString();

        if (correct_id.equals(hashcode)){
            counter +=1;
            cards.remove(Integer.valueOf(((int)button_id)));
            for(int card: cards){
                findViewById(card).setEnabled(false);
            }
            findViewById(((Integer)button_id)).setBackgroundColor(Color.GREEN);
            builder.setMessage("Clicked: " + counter + "\nDo you want to restart this application ?")
                    .setCancelable(false)
                    .setPositiveButton("Yes", new DialogInterface.OnClickListener(){
                        public void onClick(DialogInterface dialog, int id){
                        Intent start = new Intent(GameActivity.this, GameActivity.class);
                        startActivity(start);}
                    });

            AlertDialog alert = builder.create();
            alert.setTitle("You did it!");
            alert.show();


        }
        else{
            counter += 1;
            v.setEnabled(false);
        }

        Log.v(getClass().getName(), "correct value = " + correct_id);
        Log.v(getClass().getName(), "button value = " + hashcode);
    }




}